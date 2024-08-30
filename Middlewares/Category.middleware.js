const Category=require("../Models/Category.model");

exports.getCategoryById=(req, res, next, id)=>{
    Category.findById(id).exec((err,categoryData)=>{
        if(err || !categoryData){
            return res.json({
                error:"No Category Found"
            })
        }
        req.categoryData=categoryData;
        next();
        
    })
}