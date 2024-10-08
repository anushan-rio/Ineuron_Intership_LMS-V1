const mongosse=require('mongoose');
const { ObjectId } = mongosse.Schema;

const CategorySchema=new mongosse.Schema({
Name:{
        type:String,
},
user:{
    type: ObjectId,
    ref:"User"
}
},{timestamps:true})

module.exports=mongosse.model("Category",CategorySchema);
