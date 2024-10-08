const express=require("express");
const router=express.Router();
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");
const {addIssueBook,getAllIssueBook,returnBooks}=require("../Controllers/IssueBooks.contoller");
const {getUserbyId}=require("../Middlewares/User.middleware");


router.param("userId",getUserbyId);


router.post("/addIssuebooks/:userId",isSignedIn,isAutheticate,isAdmin,addIssueBook);
router.get("/getissuebooks/:userId",isSignedIn,isAutheticate,isAdmin,getAllIssueBook);

router.post("/returnBooks/:userId",isSignedIn,isAutheticate,isAdmin,returnBooks);

module.exports = router ;
