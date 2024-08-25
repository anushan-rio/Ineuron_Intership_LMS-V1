const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema;

const CategorySchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true,
        trim:true
    },
    UserCategory:{
        type:ObjectId,
        ref:"User"
    },
},{timestamps:true})


module.exports=mongoose.model("Category",CategorySchema)
