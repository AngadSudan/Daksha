const { User } = require("../models/User.models")
const {v4: uuidv4}= require('uuid')
const {setUser,getUser}= require('../utils/Auth.utils')
async function HandleUserLogin(req,res){
    const {email,password,admin,year}=req.body
    try {
        const LoggedinUser=await User.findOne({email,password,admin,year});
        const sessionId=uuidv4();
        setUser(sessionId,LoggedinUser);
        res.cookie('uid',sessionId);
        res.status(200).send(`Welcome back ${LoggedinUser.email}`);
    } catch (error) {
        res.status(404).send('User not found');
    }
    
}

module.exports={HandleUserLogin}