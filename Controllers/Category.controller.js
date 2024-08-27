const Category=require("../Models/Category.model");

exports.createcategory= async (req,res)=>{
    const { Name }=req.body;
    const existingUser = await Category.findOne({ Name });   
    if(existingUser){
        return res.json({Message:"Category Already Exist"});
    }
    
    console.log(req.profile._id)
    const CategoryData={...req.body,user:req.profile._id}
    const newCategory=new Category(CategoryData);
    newCategory.save((err,category)=>{
        if(err){
            return res.json({Error:"Error Occured While Saving---->"+err});
        }
        return res.json(category);
    })
}