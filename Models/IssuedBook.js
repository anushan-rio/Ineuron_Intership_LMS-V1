const mongosse=require('mongoose');
const {ObjectId}=mongosse.Schema;



const stripTime = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0); // Set time to midnight
    return newDate;
};


const IssuedBookSchema=new mongosse.Schema({
    BookID:{
        type: ObjectId,
        ref:"Book"
    },
    IssuedTO:{
        type:String,
        require:true
    },
    IssueDate:{
        type:String,
        require:true
    },
    ReturnDate:{
        type:String,
        require:true
    },
    Copies:{
        type:Number,
        require:true
    }
})
