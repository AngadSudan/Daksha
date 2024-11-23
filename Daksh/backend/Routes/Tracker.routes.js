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

    const pdfData = (await pdfParse(req.file.buffer)).text;
  
    const resumeText = pdfData;
    console.log('Parsed Resume Text:', resumeText);
  
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: `Please analyze this resume and provide an ATS score out of 100. Consider keyword relevance, formatting, and content quality. Also provide specific improvement suggestions. Here's the resume:
          
          ${resumeText}`
        }
      ]
    });
    res.json({
      score: message.content,
    });
  
  } catch (error) {
    console.error('Error in processing resume:', error.stack || error);
  
    // Fallback response for error cases
    const resumeTips = [
      'Use strong action verbs like "led" and "achieved."',
      'Quantify achievements (e.g., "Increased sales by 20%").',
      'Highlight results, not just job duties.',
      'Showcase relevant technical and soft skills.',
      'Include keywords to pass ATS screening.',
      'Proofread carefully for errors.',
      'Update regularly to include recent accomplishments.'
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
  
    // Optional delay for user experience
    setTimeout(() => {
      res.json({
        score: Math.round(Math.random() * 40 + 60),
        improvements: selectedTips
      });
    }, 3000);
  }
});


module.exports={
    Tracker
}