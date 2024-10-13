const {User}=require('../models/User.models')
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
module.exports={HandleUserSignUp}