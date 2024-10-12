const express= require("express");
const Todo= express.Router();

Todo.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Todo Success")
})

module.exports={
    Todo
}