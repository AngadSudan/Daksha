const express= require("express")

const Login= express.Router();

Login.get('/',(req,res)=>{
    res.status(200).send("Login page loaded")
})

Login.post("/",(req,res)=>{
    res.send("Post Request successful")
})

module.exports={Login}