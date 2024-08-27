const express=require("express");
const router=express.Router();
const {getuser,updateUser,getalluser}=require("../Controllers/User.contoller");
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");
const {getUserbyId}=require("../Middlewares/User.middleware")


router.param("userId",getUserbyId);


router.get("/getUser/:userId",isSignedIn,isAutheticate,getuser);
router.put("/upadateuser/:userId",isSignedIn,isAutheticate,updateUser);
router.get("/getalluser/:userId",isSignedIn,isAutheticate,isAdmin,getalluser);

module.exports = router ;

