const express= require("express");
const Route= express.Router();

Route.get('/',(req,res)=>{
    const uid= req.cookies?.uid;
    if(uid){
        res.status(201).send(true);
    }else{
        res.status(200).send(false);
    }
})

module.exports={ Route};