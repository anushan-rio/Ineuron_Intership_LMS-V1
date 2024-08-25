const express=require("express");
const router=express.Router();
const {getuser,getUserbyId}=require("../Controllers/User.contoller");
const {isSignedIn,isAutheticate}=require("../Controllers/Auth.controller");


router.param("userId",getUserbyId)


router.get("/getUser/:userId",isSignedIn,isAutheticate,getuser);

module.exports = router ;

