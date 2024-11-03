const express= require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const cookieParser=require('cookie-parser')
const bodyParser= require('body-parser');
const cors= require('cors');
const app= express();
const {Route}= require('./Routes/Route.routes');
const {Home}=require("./Routes/Home.routes")
const {Notes}=require("./Routes/Notes.routes")
const {Doubts}=require("./Routes/Doubts.routes");
const { Tracker } = require('./Routes/Tracker.routes');
const { Todo } = require('./Routes/Todo.routes');
const {Login}= require("./Routes/Login.routes");
const {SignUp}=require("./Routes/SignUp.routes");
const { connectDB } = require('./utils/Database.utils');

dotenv.config({
    path:"./.env"
})



app.use(cors({
    origin:process.env.CORS_ORIGIN, 
    credentials:true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/",Route)
app.use("/Home",Home)
app.use("/Notes",Notes)
app.use("/Doubts",Doubts)
app.use("/Tracker",Tracker)
app.use("/Todo",Todo)
app.use("/SignUp",SignUp)
app.use("/Login",Login)

app.get('/logout',(req,res)=>{
    res.clearCookie('uid');
    res.status(200).send('User logged out successfully');
});
connectDB();

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started and running on this ${process.env.PORT}`);
})