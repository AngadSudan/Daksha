const express= require("express");
const Route= express.Router();

Route.get('/',(req,res)=>{
    const uid= req.cookies?.uid;
    console.log(uid);
    
    if(uid){
        res.status(101).send(true);
    }else{
        res.status(200).send(false);
    }
})

module.exports={ Route};