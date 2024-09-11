const { PORT_NUMBER } = require('./constants');
const express=require('express');
const mongoose=require("mongoose");
const morgan = require('morgan');
const cors = require('cors')
const {logger}=require("./DataBase/Logger.js")

const App=express();
const bodyParser = require('body-parser') 
const db=require("./DataBase/DbConfig").mongoURL
const Port =process.env.PORT || PORT_NUMBER;
//Database Connection
mongoose.connect(db,{
                    useNewUrlParser:true,
                    useUnifiedTopology: true,
                    useCreateIndex:true
})
    .then(() => console.log('Database Connected Successfully!'))
    .catch(()=>console.log("Database NotConnected"));

//Middleware
App.use(bodyParser.json());
App.use(cors())


const morganFormat = ":method :url :status :response-time ms";
App.use(
morgan(morganFormat, {
    stream: {
    write: (message) => {
        const logObject = {
        method: message.split(" ")[0],
        url: message.split(" ")[1],
        status: message.split(" ")[2],
        responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
    },
    },
})
);


//RouterPath
const AuthRoute=require("./Routers/Auth.router");
const UserRoute=require("./Routers/User.router");
const CategoryRoute=require("./Routers/Category.router");
const BooksStatusRoute=require("./Routers/BookStatus.router");
const BookCondtionRoute=require("./Routers/BooksCondtion.router");
const BooksRoute=require("./Routers/Books.router");
const IssueBookRoute=require("./Routers/IssueBook.router");
const SearchRoute=require("./Routers/Search.router");

//Api Calling
App.use('/api/v1',AuthRoute);
App.use('/api/v1',UserRoute);
App.use('/api/v1',CategoryRoute);
App.use('/api/v1',BooksStatusRoute);
App.use('/api/v1',BookCondtionRoute);
App.use('/api/v1',BooksRoute);
App.use('/api/v1',IssueBookRoute);
App.use('/api/v1',SearchRoute);


App.listen(Port,()=>console.log(`app is conected to the ${Port}`))