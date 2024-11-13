const express= require("express");
const {CloudinaryUpload, CloudinaryRetrieve}=require('../utils/Cloudinary.utils');
const {upload}=require('../Middleware/multer.middleware');
const Notes= express.Router();
const {SubjectModel}=require('../models/SubjectNotes.models')

Notes.get("/",async (req,res)=>{
    const Subjects = await SubjectModel.distinct("Subject");
    res.send(Subjects);
})

Notes.get("/subject/:id",async (req,res)=>{
    const Subject=req.params.id;
    const chapter=await SubjectModel.distinct('Chapter').where('Subject').equals(Subject);
    res.send(chapter);
    // try {
    //     const result = await CloudinaryRetrieve(Subject,Chapter);
    //     res.status(200).send(result);
    // } catch (error) {
    //     console.log(error);
        
    //     res.status(400).send('Error after cloudinary effects of reterival')   
    // } 
})

Notes.get("/subject/:id/:chapter",async (req,res)=>{
    const Subject=req.params.id;
    const Chapter=req.params.chapter;

    const data= await SubjectModel.find({Subject,Chapter});
    res.send(data);
})
Notes.post("/subject/:id",upload.single("Notes"),async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        const filepath = req.file.path;
        const result = await CloudinaryUpload(filepath);
        const Result= await SubjectModel.create({
            Subject: req.params.id,
            Chapter: req.body.Chapter,
            title: req.body.title,
            Url: result.secure_url,
        })
        
        if (!result) {
            return res.status(500).send("Failed to upload the file to Cloudinary.");
        }
        res.send(`File uploaded successfully: ${Result.Url}`);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during the upload process.");
    }
});
module.exports={
    Notes
}