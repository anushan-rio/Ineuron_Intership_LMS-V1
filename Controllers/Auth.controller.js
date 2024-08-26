const User=require("../Models/User.model");
const { SECRET } = require("../constants");
const jwt = require("jsonwebtoken");
var expressjwt = require("express-jwt");

exports.signup=async (req,res)=>{
    const { Email } = req.body;
    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
        
            return res.json({Message:'Email is already registered.'});
        }
    const user=new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.json({err:"OOPS Error Occured"})
        }
        return res.json({
            user
        })

    })
}
catch{
    return res.json({Message:"OOPS DataBase Error"});
}
}

exports.signin=(req,res)=>{
    const { Email, password}=req.body;
    User.findOne({Email},(err,user)=>{
        if(err||!user){
            return res.json({Error:"User Not Found"})
        }
        if (!user.autheticate(password)) {
            return res.status(401).json({
            error: "Email and password do not match"
            });
        }
        const token = jwt.sign({ _id: user._id },SECRET);
        res.cookie("token",token,{expire:new Date() + 9999})
        const {_id,Email,Role}=user
        return res.json({token, user:{_id,Email,Role}})
    })
}


exports.signout=(req,res)=>{
    res.clearCookie("token")
    res.json({ message:"user signout sucessfull"})
}



exports.isSignedIn=expressjwt({
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
    console.log("req.profile----"+req.profile.Role)
    if(req.profile.Role==0){
        return res.json({
            Error:"You Are Not Admin TO Access"
        })
    }
    next();
}
