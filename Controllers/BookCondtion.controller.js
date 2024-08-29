const BooksCondtion=require("../Models/BookCondtion.model");
const {getBookCondtion}=require("../Middlewares/BooksStatus.middleware");


exports.createBooksCondtion=async(req,res)=>{
        const {BookState}=req.body;
        const userid=req.profile._id;
        const existingBooksCondtion=await BooksCondtion.findOne({BookState,User:userid})
        if(existingBooksCondtion){
            return res.json({Message:"BooksCondtion Already Exist"})
        }
        const Bookcondtion={...req.body,User:userid};
        const newBookcondtion=new BooksCondtion(Bookcondtion);
        newBookcondtion.save((err,bookscondtion)=>{
            if(err){
            return res.json({Error:"Error Occured While Saving"});
            }
            return res.json(bookscondtion);
        })
}


exports.gettallBooksCondtion=async(req,res)=>{
    const userid=req.profile._id;
    BooksCondtion.find({User:userid},(err,bookscondtiondata)=>{
        if(err){
            return res.json({Error:"Error Occured While Getting The Data"});
        }
        return res.json(bookscondtiondata);

    })
}

exports.deleteBooksCondtion=(req,res)=>{
    const Bookcondtiondata=req.bookcondtiondata;
    const userid=req.profile._id;
    BooksCondtion.deleteOne({_id:Bookcondtiondata._id,User:userid},(err,bookscondtion)=>{
        if(err){
            return res.json({Error:"Error Occured While Deleteing The Data"});
        }
        return res.json(bookscondtion);
    })
}