const User=require("../Models/User.model");

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
            Email:user.Email
        })

    })
}
catch{
    return res.json({Message:"OOPS DataBase Error"});

}
}







