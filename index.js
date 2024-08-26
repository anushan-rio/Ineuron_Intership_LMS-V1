const { PORT_NUMBER } = require('./constants');
const express=require('express');
const mongoose=require("mongoose");
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
App.use(bodyParser.json())


//RouterPath
const AuthRoute=require("./Routers/Auth.router");
const UserRoute=require("./Routers/User.router");
const CategoryRoute=require("./Routers/Category.router");
//Api Calling
App.use('/api/v1',AuthRoute);
App.use('/api/v1',UserRoute);
App.use('/api/v1',CategoryRoute);


App.listen(Port,()=>console.log(`app is conected to the ${Port}`))