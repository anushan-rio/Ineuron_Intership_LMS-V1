const IssueBook=require("../Models/IssuedBook.model");
const Books=require("../Models/Books.model")
const User=require("../Models/User.model")
const BooksStatus=require("../Models/BooksStatus.model")
const { format, differenceInDays, parseISO } = require('date-fns');
const {FINEAMOUNT}=require("../constants");


async function IssueBookCopies(Copies,BookID,CopieFlag){
    const BookData=await Books.findOne({_id:BookID});
    if(CopieFlag==="issueBooks"){
        var updateCopies=BookData.Copies-Copies;
    }
    if(CopieFlag==="returnBooks"){
        var updateCopies=BookData.Copies+Copies;
    }
    const filter = { _id:BookData._id};
    const updateDoc = {
    $set: {
        Copies: updateCopies
    }}
    await Books.updateOne(filter,updateDoc)
}


exports.addIssueBook=async(req,res)=>{
    const IssueBookData=new IssueBook(req.body);
    const CheckBookCode=await Books.findOne({BookCode:IssueBookData.BooksCode});

    var CopieFlag="issueBooks";
    IssueBookCopies(IssueBookData.Copies,CheckBookCode._id,CopieFlag)
    if(CheckBookCode){
        var Userid=req.profile
        const newIssueBookData=new IssueBook({...req.body,User:Userid})
        newIssueBookData.save((err,issuebook)=>{
            if(err){
                return res.json({Error:"Error Occured While Saving The Data"});
            }
            return res.json(issuebook);
    
        })
    }
}


exports.returnBooks=async(req,res)=>{
    const returnBooks=req.body;
    var Userid=req.profile
    console.log("returnBooks----",returnBooks.Booksstatus)
    const Issuetoemail=await User.findOne({Email:returnBooks.IssueTOEmail});
    const CheckIssueBooks=await IssueBook.findOne({BooksCode:returnBooks.BooksCode,IssueTOEmail:Issuetoemail._id,User:Userid});
    console.log("CheckIssueBooks-----"+CheckIssueBooks._id)
    //Calculated Fine
    const finecalculated=finecalculation(CheckIssueBooks.IssueDate,CheckIssueBooks.ReturnDate);
    
    const obj = {
        'Total Fine IS': Promise.resolve(finecalculated)
    };
    const resolvedObject = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value instanceof Promise) {
            
            resolvedObject[key] = await value;
            var FineAmount=resolvedObject[key]
        } else {
            
            resolvedObject[key] = value;
        }
    }
    //Update BookCopies
    var CopieFlag="returnBooks";
    const getBookId=await Books.findOne({BookCode:returnBooks.BooksCode,User:Userid});
    IssueBookCopies(returnBooks.Copies,getBookId,CopieFlag)
    

    //Update Issue Books
    const filter = { _id:CheckIssueBooks._id};
    console.log("filter----",filter);
    const updateDoc = {
        $set: {
            Booksstatus: returnBooks.Booksstatus
        }}
        await IssueBook.updateOne(filter,updateDoc)
    return res.json({FineAmount,"Message":"Books Updated SucessFully"})

}




async function finecalculation(IssueDate,ReturnDate){
    var difference=differenceInDays(ReturnDate,IssueDate);
    if(difference===0){
        return "No Fine";
    }
    else{
        var totalFineAmount=FINEAMOUNT*difference;
        return totalFineAmount;

    }
}














exports.getAllIssueBook=(req,res)=>{
    var Userid=req.profile
    IssueBook.find({User:Userid})
    .populate('IssueTOEmail' ,'Email')
    .populate('User','Email')
    .populate('Booksstatus','BooksStatus')
    .exec()
    .then((issuebooks)=>{
        if(issuebooks){
            return res.json(issuebooks);
        }
    
    }).catch(err=>{
        if(err){
            return res.json({Error:"Error Occured While Getting The Data"})
        }
    })
}