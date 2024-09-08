const Category=require("../Models/Category.model");
const {getCategoryById}=require("../Middlewares/Category.middleware");

exports.createcategory= async (req,res)=>{
    const { Name }=req.body;
    const existingUser = await Category.findOne({ Name });   
    if(existingUser){
        return res.json({Message:"Category Already Exist"});
    }
    
    const CategoryData={...req.body,user:req.profile._id}
    const newCategory=new Category(CategoryData);
    newCategory.save((err,category)=>{
        if(err){
            return res.json({Error:"Error Occured While Saving"});
        }
        return res.json(category);
    })
}

exports.getAllCategory=(req,res)=>{
    const userid=req.profile._id;
    
    Category.find({user:userid},(err,categories)=>{
        if(err){
            return res.json({Error:"Error In Getting Categories"});
        }

        if(categories==""){
            return res.json({Message:"No Data Avaiable"});
        }
        return res.json(categories);
    })
}

exports.deleteCategory=(req,res)=>{
    const category=req.categoryData;
    const userid=req.profile._id;
    Category.deleteOne({_id:category._id,user:userid},(err,category)=>{
        if(err){
            return res.json({
                error:"Error occured while deteing the category"
            })
        }
        return res.json(category)
    })
}