const express=require("express");
const router=express.Router();
const {createBooksStatus,getAllBooksStatus,deleteCategory}=require("../Controllers/BooksStatus.controller");
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");
const {getUserbyId}=require("../Middlewares/User.middleware");
const {getBooksStatusId}=require("../Middlewares/BooksStatus.middleware");

router.param("userId",getUserbyId);
router.param("bookstatusId",getBooksStatusId);


router.post("/bookstatus/create/:userId",isSignedIn,isAutheticate,isAdmin,createBooksStatus);
router.get("/bookstatus/getAll/:userId",isSignedIn,isAutheticate,isAdmin,getAllBooksStatus);
router.delete("/bookstatus/delete/:userId/:bookstatusId",isSignedIn,isAutheticate,isAdmin,deleteCategory);

module.exports = router ;
