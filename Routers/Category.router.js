const express=require('express');
const router=express.Router();
const {createcategory}=require("../Controllers/Category.controller")

router.post("/createcategory",createcategory)