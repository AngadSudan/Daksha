const express= require("express");
const Notes= express.Router();

Notes.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Notes Success")
})

Notes.get("/subject/:id",(req,res)=>{
    res.status(200).send(`This is custom notes app for subject ${req.params.id} `)
})
Notes.post("/subject/upload",(req,res)=>{
    res.status(200).send("Posted Successfully")
})
module.exports={
    Notes
}