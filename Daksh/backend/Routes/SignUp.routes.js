const express=require('express')
const SignUp= express.Router();
const {HandleUserSignUp}= require('../Controllers/HandleUserSignUp.controller')
SignUp.get('/',(req,res)=>{
    res.status(200).send("This is SignUp Route");
})

SignUp.post('/',HandleUserSignUp)

module.exports={SignUp}