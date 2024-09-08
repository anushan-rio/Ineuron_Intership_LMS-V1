const express=require('express');
const router=express.Router();
const {createcategory,getAllCategory,deleteCategory}=require("../Controllers/Category.controller");
const {getUserbyId}=require("../Middlewares/User.middleware");
const {getCategoryById}=require("../Middlewares/Category.middleware");
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");


router.param("userId",getUserbyId);
router.param("categoryId",getCategoryById);



router.post("/createcategory/:userId",isSignedIn,isAutheticate,isAdmin,createcategory);
router.get("/getAllcategories/:userId",isSignedIn,isAutheticate,isAdmin,getAllCategory);
router.delete("/deleteCategory/:categoryId/:userId",isSignedIn,isAutheticate,isAdmin,deleteCategory);



module.exports = router ;
