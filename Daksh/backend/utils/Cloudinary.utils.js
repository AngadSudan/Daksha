const Cloudinary= require("cloudinary").v2;
const fs= require("fs")

Cloudinary.config({
    cloud_name:process.env.VITE_CLOUD_NAME,
    api_key:process.env.VITE_API_KEY,
    api_secret:process.env.VITE_API_SECRET
})

const CloudinaryUpload=async (filepath,req,res)=>{
    try {
        if(!filepath) return null;
        const response= await Cloudinary.uploader.upload(filepath,{
            resource_type:"auto"
        })

        //file uploaded
        fs.unlinkSync(filepath)
        res.send(`file uploaded perfectly ${response.url}`);
    } catch (error) {
        //remove local file
        fs.unlinkSync(filepath)
        return null;
    }
}

module.exports={
    CloudinaryUpload
}