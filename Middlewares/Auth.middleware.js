exports.isSignedIn=expressJwt({
    secret:SECRET,
    userProperty: "auth"
})

exports.isAutheticate=(req,res,next)=>{
    let checker=req.auth._id;
    if(!checker){
        return res.json({
            error:"Access denied"
        })
    }
    next();
}


exports.isAdmin=(req,res,next)=>{
    if(req.auth.role==0){
        return res.json({
            error:"you are not admin"
        })
    }
    next();
}