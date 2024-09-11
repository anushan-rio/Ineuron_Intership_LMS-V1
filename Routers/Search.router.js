const express=require("express");
const router=express.Router();
const {searchbooks}=require("../Controllers/Search.controller")

router.get("/search",searchbooks);

module.exports = router ;

