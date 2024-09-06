const express=require("express");
const router=express.Router();
const {getUserbyId}=require("../Middlewares/User.middleware");
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");
const {createBooksCondtion,gettallBooksCondtion,deleteBooksCondtion}=require("../Controllers/BookCondtion.controller")
const {getBookCondtionById}=require("../Middlewares/BooksStatus.middleware")

router.param("userId",getUserbyId);
router.param("bookscondtionId",getBookCondtionById);


router.post("/createbookcondtion/:userId",isSignedIn,isAutheticate,isAdmin,createBooksCondtion);
router.get("/getallbookcondtion/:userId",isSignedIn,isAutheticate,isAdmin,gettallBooksCondtion);
router.delete("/deletebookcondtion/:userId/:bookscondtionId",isSignedIn,isAutheticate,isAdmin,deleteBooksCondtion);

module.exports = router ;
