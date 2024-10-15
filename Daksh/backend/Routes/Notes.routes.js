const express= require("express");
const CloudinaryUpload=require('../utils/Cloudinary.utils');
const {upload}=require('../Middleware/multer.middleware')
const Notes= express.Router();
Notes.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Notes Success")
})

Notes.get("/subject/:id",(req,res)=>{
    res.status(200).send(`This is custom notes app for subject ${req.params.id} `)
})
Notes.post("/subject/:id",upload.single("Notes"),CloudinaryUpload);
module.exports={
    Notes
}