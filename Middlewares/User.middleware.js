const User=require("../Models/User.model");


exports.getUserbyId=(req, res, next, id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.json({
                error:"No user found"
            })
        }
        req.profile=user;
        next();
        
    })
}