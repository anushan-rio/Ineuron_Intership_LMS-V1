const express=require('express');
const router=express.Router();
const {signup,sigin} =require("../Controllers/Auth.controller")


router.post('/signup',signup);
router.post('/sigin',sigin);


module.exports = router ;