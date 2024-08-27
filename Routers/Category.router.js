const express=require('express');
const router=express.Router();
const {createcategory}=require("../Controllers/Category.controller")
const {getUserbyId}=require("../Middlewares/User.middleware")
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");


router.param("userId",getUserbyId);


router.post("/createcategory/:userId",isSignedIn,isAutheticate,isAdmin,createcategory);

module.exports = router ;
