const {User}=require('../models/User.models')
const {v4: uuidv4}= require('uuid')
async function HandleUserSignUp(req,res){
    const {rollnumber,email,year,password,admin}=req.body;
    try {
        await User.create({
            rollnumber,
            email,
            year,
            password,
            admin
        })
        console.log("Successful Signup");
        res.status(200).send("Welcome Aboard Sir");
        
    } catch (error) {
        console.log("An error occured",error);
        res.status(500).send(User)
    }
    
}


// const {verifyJWT}= require('../utils/Auth.utils')
// const {setUser,getUser}= require('../utils/Auth.utils')
async function HandleUserLogin(req,res){
    const {email,password,admin,year}=req.body
    try {
        const LoggedinUser=await User.findOne({email,password,admin,year});
        const sessionId=uuidv4();
        console.log("cookie generated");
        
        // setUser(sessionId,LoggedinUser);
        res.cookie('uid',sessionId,{
            httpOnly:true,
            secure: true,
        });
        res.status(200).send(`Welcome back ${LoggedinUser.email}`);
        console.log("check3");
    } catch (error) {
        res.status(404).send('User not found');
    }
}

async function HandleUserLogout(req,res){
    
}
module.exports={HandleUserSignUp ,HandleUserLogin, HandleUserLogout }