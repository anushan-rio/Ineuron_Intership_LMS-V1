const Books=require("../Models/Books.model")

exports.addBooks=async(req,res)=>{
    const {Title}=req.body;
    const existingData=await Books.findOne({Title});
    if(existingData){
        return res.json({Message:"Book Already Exist"});
    }
    const userid=req.profile._id;
    
    const Booksdata={...req.body,
        User:userid,
        BookCode:req.bookcode
    };
    const newbookdata=new Books(Booksdata);
    newbookdata.save((err,books)=>{
        if(err){
            return res.json({Message:"Error Occured While Saving the Data"});
        }
        return res.json(books);
    })
}

exports.gettallBooks=async(req,res)=>{
    const userid=req.profile._id;
    Books.find({User:userid})
    .populate('BookCategory' ,'Name')
    .populate('BookStatus' ,'BooksStatus')
    .populate('BookCondtion' ,'BookState')
    .exec(
        (err,books)=>{
            if(err){
            return res.json({Error:"Erro Occured While Geting the Book"})

            }
                return res.json(books)
        }
    )
        
}

exports.deleteBooks=(req,res)=>{
    const books=req.books;
    const userid=req.profile._id;
    Books.deleteOne({_id:books._id,User:userid},(err,book)=>{
        if(err){
            return res.json({
                error:"Error occured while deteing the category"
            })
        }
        console.log(book)
        return res.json(book)
    })
}


exports.updateBooks=(req,res)=>{
    const books=req.books;
    const userid=req.profile._id;
    Books.findByIdAndUpdate({_id:books._id,User:userid},
                            {$set:req.body},
                            {new:true,useFindAndModify:false},
                                (err,book)=>{
                                    if(err || !book){
                                        return res.json({
                                            error:"Error in update"
                                        })
                                    }
                                    res.json(book)
                                }
                            )
}
