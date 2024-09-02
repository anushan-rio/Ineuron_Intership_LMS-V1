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


//TODO GETALL,DELETE,UPDATE BOOKS