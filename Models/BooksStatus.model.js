const mongosse=require('mongoose');
const { ObjectId } = mongosse.Schema;

const BookStatusSchema=new mongosse.Schema({
    BooksStatus:{
        type:String,
        require:true,
        trim:true
    },
    User:{
        type: ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports=mongosse.model("BooksStatus",BookStatusSchema);
