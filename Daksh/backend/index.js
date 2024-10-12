const express= require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
const cors= require('cors');
const app= express();
const {Route}= require('./Routes/Route.routes');
const {Home}=require("./Routes/Home.routes")
const {Notes}=require("./Routes/Notes.routes")
const {Doubts}=require("./Routes/Doubts.routes");
const { Tests } = require('./Routes/Tests.routes');
const { Todo } = require('./Routes/Todo.routes');
const {Login}= require("./Routes/Login.routes")

dotenv.config({
    path:"./.env"
})

app.use(cors({origin:process.env.CORS_ORIGIN}));
app.use(express.json());
app.use(bodyParser.json());


app.use("/",Route)
app.use("/Home",Home)
app.use("/Notes",Notes)
app.use("/Doubts",Doubts)
app.use("/Tests",Tests)
app.use("/Todo",Todo)
app.use("/Login",Login)

try {
    mongoose.connect(`${process.env.MONGO_URL}/short-url`).then(()=> console.log("MongoDB Connected")
    )
} catch (error) {
    console.log("error in db connectivity");
    
}

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started and running on this ${process.env.PORT}`);
})