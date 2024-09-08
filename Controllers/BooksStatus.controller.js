const BooksStatusModel=require("../Models/BooksStatus.model");

exports.createBooksStatus=async(req,res)=>{
    const {BooksStatus}=req.body;
    const userid=req.profile._id;
    const existingData=await BooksStatusModel.findOne({BooksStatus,User:userid._id});
    if(existingData){
        return res.json({Message:"Bookstatus Already Exist"});
    }
    const BookStatusData={...req.body,User:req.profile._id}
    const newBookStatusData=new BooksStatusModel(BookStatusData);
    newBookStatusData.save((err,bookstatus)=>{
        if(err){
            return res.json({Error:"Error Occured While Saving the Data"});
        }
        return res.json(bookstatus);
    })
    
}


exports.getAllBooksStatus=(req,res)=>{
    BooksStatusModel.find({},(err,bookstatus)=>{
        if(err){
            return res.json({Error:"Error Occured While Getting The Data"});
        }
        if(bookstatus==""){
            return res.json({Message:"No Data Available"});
        }
        return res.json(bookstatus);
    })
}

exports.deleteCategory=(req,res)=>{
    const BooksStatusData=req.bookstatusData;
    const userid=req.profile._id;
    BooksStatusModel.deleteOne({_id:BooksStatusData._id,User:userid},(err,bookstatus)=>{
        if(err){
            return res.json({
                error:"Error occured while deteing the category"
            })
        }
        return res.json(bookstatus)
    })
}

