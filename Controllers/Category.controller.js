const Category=require("../Models/Category.model");

exports.createcategory=(req,res)=>{
    const {category}=req.body;
    Category.findOne({category},(err,existingcategory)=>{
        if(err){
            return res.json({Error:"Error Occured"})
        }
        return res.json(existingcategory)
    });
    const newcategory=new Category(req.body);
    Category.save((err,category)=>{
        if(err){
            return res.json({Error:"Error Occured While Saving"})
        }
        return res.json({Message:"Category Saved SucessFully"})
    })

}