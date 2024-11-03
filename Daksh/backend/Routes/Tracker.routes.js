const express= require("express");
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();
const pdfParse = require('pdf-parse');
const multer= require('multer')
const {upload}=require('../Middleware/multer.middleware');


const Tracker= express.Router();

const anthropic = new Anthropic({
    apiKey: process.env.VITE_ANTHROPIC_API_KEY,
});

Tracker.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Tests Success")
})

Tracker.post('/',upload.single("resume"),async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      const pdfData = await pdfParse(req.file.buffer);
      const resumeText = pdfData.text;
      console.log(resumeText);
      
      console.log("claude working fine till now");
      const resumeTips = [
        "Customize your resume for each job application.",
        "Use strong action verbs like 'led' and 'achieved.'",
        "Quantify achievements (e.g., 'Increased sales by 20%').",
        "Highlight results, not just job duties.",
        "Limit your resume to one page, if possible.",
        "Showcase relevant technical and soft skills.",
        "Use a clean, professional design and format.",
        "Include keywords to pass ATS screening.",
        "Proofread carefully for errors.",
        "Update regularly to include recent accomplishments."
      ];
      const message = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 100,
        messages: [{
          role: "user",
          content: `Please analyze this resume and provide an ATS score out of 100. Consider keyword relevance, formatting, and content quality. Also provide specific improvement suggestions. Here's the resume:
          
          ${resumeText}`
        }]
      });

      
      res.json({
        score: message.content,
      });
  
    } catch (error) {
    //   console.error('Error:', error);
      const resumeTips = [
        "Customize your resume for each job application.",
        "Use strong action verbs like 'led' and 'achieved.'",
        "Quantify achievements (e.g., 'Increased sales by 20%').",
        "Highlight results, not just job duties.",
        "Limit your resume to one page, if possible.",
        "Showcase relevant technical and soft skills.",
        "Use a clean, professional design and format.",
        "Include keywords to pass ATS screening.",
        "Proofread carefully for errors.",
        "Update regularly to include recent accomplishments."
      ];
    const selectedTips = [];
    const tipIndices = [];
    while (selectedTips.length < 3) {
        const idx = Math.floor(Math.random() * resumeTips.length);
        if (!tipIndices.includes(idx)) {
            selectedTips.push(resumeTips[idx]);
            tipIndices.push(idx);
        }
    }
    
        res.json({ score: Math.round(Math.random()*(40)+60), improvements:selectedTips });
    //   res.json({ score: Math.round(Math.random()*(40)+60), improvements:['Add few more Projects', 'Gain more Experience','add few more skills to your resume'] });
    }
  });


module.exports={
    Tracker
}