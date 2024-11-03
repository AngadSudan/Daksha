const Cloudinary= require("cloudinary").v2;
const fs= require("fs")
const {SubjectModel}=require('../models/SubjectNotes.models')

async function CloudinaryUpload(filepath){
    Cloudinary.config({
        cloud_name:process.env.VITE_CLOUD_NAME,
        api_key:process.env.VITE_API_KEY,
        api_secret:process.env.VITE_API_SECRET,
        cloudinary_url: process.env.VITE_CLOUD_URL
    })

    
    try {
        if(!filepath) return null;

        const response= await Cloudinary.uploader.upload(filepath,{
            resource_type:"raw",
            flags:'attachment'
        })

        
        fs.unlinkSync(filepath);
        console.log("response was sent successfully",response);
        return response;
        
        // res.send(`file uploaded perfectly ${response.url}`);
    } catch (error) {
        if (filepath && fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
        }
        console.log("An error occured", error);
        
        return null;
    }
}
async function CloudinaryRetrieve(Subject,Chapter){
    Cloudinary.config({
        cloud_name:process.env.VITE_CLOUD_NAME,
        api_key:process.env.VITE_API_KEY,
        api_secret:process.env.VITE_API_SECRET,
        cloudinary_url: process.env.VITE_CLOUD_URL
    })
    const options = {
        resource_type: 'auto',
        flags: 'attachment',
        secure: true,
        sign_url: true,  
      };
    const pdfs= await SubjectModel.find({Subject,Chapter});
    const publicId= pdfs.public_id || 'txnypdij6tlrpivtg01h.pdf';
    return Cloudinary.url(`${publicId}`, options)
}
module.exports={
    CloudinaryUpload,
    CloudinaryRetrieve
}