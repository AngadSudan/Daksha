const express= require("express");
const Home= express.Router();

Home.get("/",(req,res)=>{
    console.log("Successful server message");
    res.status(200).send("This is Home Success")
})

module.exports={
    Home
}