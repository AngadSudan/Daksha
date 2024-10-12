const express= require("express");
const Route= express.Router();

Route.get('/',(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("THIS IS A SUCCESSFUL LAUNCH");
})

module.exports={ Route};