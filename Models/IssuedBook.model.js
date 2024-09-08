const mongosse=require('mongoose');
const {ObjectId}=mongosse.Schema;


const IssuedBookSchema=new mongosse.Schema({

IssueTOEmail:{
        type: ObjectId,
        ref:"User"
},
BooksCode:{
    type:String,
    require:true
},
IssueDate:{
    type:String,
    require:true
},
ReturnDate:{
    type:String,
    require:true
},
Copies:{
    type:Number,
    require:true
},
User:{
    type: ObjectId,
    ref:"User"
},
Booksstatus:{
    type: ObjectId,
    ref:"BooksStatus"
}

},{timestamps:true})



module.exports=mongosse.model("IssueBook",IssuedBookSchema);
