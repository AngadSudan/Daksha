const express= require("express");
const Tests= express.Router();

Tests.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Tests Success")
})

module.exports={
    Tests
}