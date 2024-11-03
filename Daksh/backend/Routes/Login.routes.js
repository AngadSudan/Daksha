const express= require("express");
const { HandleUserLogin } = require("../Controllers/HandleUserSignUp.controller");

const Login= express.Router();

Login.get('/',(req,res)=>{
    res.status(200).send("Login page loaded")
})

Login.post("/",HandleUserLogin);

module.exports={Login}