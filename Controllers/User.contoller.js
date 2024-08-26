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


exports.getuser=(req,res)=>{
    const UserDetails=req.profile;
    if(!UserDetails){
        return res.json({Message:"Error Occured"})
    }
    UserDetails.salt=undefined
    UserDetails.encry_password=undefined
    UserDetails.createdAt=undefined;
    UserDetails.updatedAt=undefined;
    UserDetails.Role=undefined;
    
    return res.json(UserDetails)
}

exports.updateUser=(req,res)=>{
    User.findByIdAndUpdate({_id:req.profile._id},
                            {$set:req.body},
                            {new:true,useFindAndModify:false},
                                (err,user)=>{
                                    if(err || !user){
                                        return res.json({
                                            error:"Error in update"
                                        })
                                    }
                                    user.salt=undefined
                                    user.encry_password=undefined
                                    user.createdAt=undefined;
                                    user.updatedAt=undefined;
                                    user.Role=undefined;
                                    res.json(user)
                                }
                            )
}

exports.getalluser=(req,res)=>{
        User.find({},(err,allusers)=>{
            if(err){
                return res.json({Error:"Error Occured"})
            }
            return res.json(allusers)
    })

}