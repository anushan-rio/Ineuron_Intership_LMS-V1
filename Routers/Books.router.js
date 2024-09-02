const express=require("express");
const router=express.Router();
const {addBooks,gettallBooks,deleteBooks,updateBooks}=require("../Controllers/Books.contoller")
const {isSignedIn,isAutheticate,isAdmin}=require("../Controllers/Auth.controller");
const {getRandom}=require("../Helper/GernateBookCode")
const {getUserbyId}=require("../Middlewares/User.middleware");
const {getBooksById}=require("../Middlewares/BooksStatus.middleware")


router.param("userId",getUserbyId);
router.param("booksId",getBooksById);


router.post("/createBooks/:userId",isSignedIn,isAutheticate,isAdmin,getRandom,addBooks);
router.get("/getAllBooks/:userId",isSignedIn,isAutheticate,isAdmin,gettallBooks);
router.delete("/deleteBooks/:userId/:booksId",isSignedIn,isAutheticate,isAdmin,deleteBooks);
router.put("/updateBooks/:userId/:booksId",isSignedIn,isAutheticate,isAdmin,updateBooks);

module.exports = router ;
