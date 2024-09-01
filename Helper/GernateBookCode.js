const { Random } = require("random-js");
const {STARTBOOKCODE,ENDBOOKCODE}=require("../constants");


exports.getRandom=(req, res, next)=>{
    const random = new Random();
    const value = random.integer(STARTBOOKCODE, ENDBOOKCODE);
    req.bookcode=value;
    next();
}