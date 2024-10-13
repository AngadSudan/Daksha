const { User } = require("../models/User.models")

async function HandleUserLogin(req,res){
    const {email,password}=req.body
    try {
        const LoggedinUser=await User.findOne({email,password});
        res.status(200).send(`Welcome back ${LoggedinUser.email}`);
    } catch (error) {
        res.status(404).send('User not found');
    }
    
}

module.exports={HandleUserLogin}