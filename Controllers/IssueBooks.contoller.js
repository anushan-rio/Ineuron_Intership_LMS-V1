const IssueBook=require("../Models/IssuedBook");
const Books=require("../Models/Books.model")



async function IssueBookCopies(Copies,BookID){
    const BookData=await Books.findOne({_id:BookID});
    var updateCopies=BookData.Copies-Copies;
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

    var CopieFlag="addIsueBook";
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

exports.getAllIssueBook=(req,res)=>{
    var Userid=req.profile
    IssueBook.find({User:Userid})
    .populate('IssueTOEmail' ,'Email')
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