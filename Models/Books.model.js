const mongosse=require('mongoose');
const {ObjectId}=mongosse.Schema;

const Books=new mongosse.Schema({
    Title:{
        type:String,
        require:true,
        trim:true
    },
    Author:{
        type:String,
        require:true,
        trim:true
    },
    Publisher:{
        type:String,
        require:true,
        trim:true
    },
    Edition:{
        type:String,
        require:true,
        trim:true
    },
    Price:{
        type:Number,
        require:true,
        trim:true
    },
    Copies:{
        type:Number,
        require:true,
        trim:true
    },
    Location:{
        type:String,
        require:true
    },
    BookCategory:{
        type: ObjectId,
        ref:"Category"
    },
    User:{
        type: ObjectId,
        ref:"User"
    },
    BookStatus:{
        type: ObjectId,
        ref:"BooksStatus"
    },
    BookCondtion:{
        type: ObjectId,
        ref:"BooksCondtion"
    } ,
    BookCode:{
        type:String,
        trim:true
    }

},{timestamps:true})

module.exports=mongosse.model("Book",Books);

