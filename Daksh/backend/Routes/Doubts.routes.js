const express= require("express");
const sgMail= require("@sendgrid/mail")
const Doubts= express.Router();

Doubts.get("/",(req,res)=>{
    console.log("Successful server message");
    
    res.status(200).send("This is Doubts Success")
})
Doubts.post("/",async (req,res)=>{
    sgMail.setApiKey(process.env.VITE_SENDGRID_API);
    const { to, subject, text } = req.body;
    const msg = {
        to,
        from:process.env.VITE_EMAIL,
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        res.status(200).redirect('/');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).redirect('/');
    }
});

module.exports={
    Doubts
}