const mongosse=require('mongoose');
const {ObjectId}=mongosse.Schema;

const BookCondtionSchema=new mongosse.Schema({
    BookState:{
        type:String,
        require:true,
        trim:true
    },
    User:{
        type: ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports=mongosse.model("BooksCondtion",BookCondtionSchema);
