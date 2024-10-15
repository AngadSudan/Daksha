const express= require("express");
const {HandleTodo}= require('../Controllers/HandleTodo.controller')
const Todo= express.Router();

Todo.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Todo Success")
})
Todo.post('/',HandleTodo);
module.exports={
    Todo
}