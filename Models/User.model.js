const mongosse=require('mongoose');
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");

const UserSchema=new mongosse.Schema({
    Email:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    encry_password:{
        type:String,
        required:true,
        trim:true
    },
    Address:{
        type:String,
        required:true,
        trim:true
    },
    PhoneNumber:{
        type:Number,
        required:true,
        trim:true
    },
    LibraryMangement:{
        type:String,
        required:true,
        trim:true
    },
    Name:{
        type:String,
        required:true,
        trim:true
    },
    salt:String,
    Role:{
        type:String,
        default:0
    }
},{timestamps:true})

UserSchema.methods={
    
    autheticate: function(plainpassword) {
        return this.securepassword(plainpassword) === this.encry_password;
        },
    
    securepassword:function(plainpassword){
        if(!plainpassword){
            return "";
        }
        try{
            return crypto
            .createHmac("sha256", this.salt)
            .update(plainpassword)
            .digest("hex");
            
        }
        catch(err){
            console.log("if4")
            return "";
        }
    }
}

UserSchema.virtual("password")
    .set(function(password){
        this._passsword=password;
        this.salt=uuidv1();
        this.encry_password=this.securepassword(password);
    })
    .get(function(){
        return this._passsword;
    })




module.exports=mongosse.model("User",UserSchema)