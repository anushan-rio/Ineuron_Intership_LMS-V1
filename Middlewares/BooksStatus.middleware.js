const BooksStatusModel=require("../Models/BooksStatus.model");
const BooksCondtion=require("../Models/BookCondtion.model");


//BooksStatus MiddleWare
exports.getBooksStatusId=(req, res, next, id)=>{
    BooksStatusModel.findById(id).exec((err,bookstatus)=>{
        if(err || !bookstatus){
            return res.json({
                error:"No Data Avaiable"
            })
        }
        req.bookstatusData=bookstatus;
        next();
        
    })
}

//BookCondtion Middleware
exports.getBookCondtionById=(req, res, next, id)=>{
    BooksCondtion.findById(id).exec((err,bookcondtion)=>{
        if(err || !bookcondtion){
            return res.json({
                error:"No Data Avaiable"
            })
        }
        req.bookcondtiondata=bookcondtion;
        next();
        
    })
}
