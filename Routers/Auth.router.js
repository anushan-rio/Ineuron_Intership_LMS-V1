const express=require('express');
const router=express.Router();
const {signup} =require("../Controllers/Auth.controller")


router.post('/signup',signup);


module.exports = router ;