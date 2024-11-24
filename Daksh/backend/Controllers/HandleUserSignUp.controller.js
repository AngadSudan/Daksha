const {User}=require('../models/User.models')

async function HandleUserSignUp(req,res){
    const {rollnumber,email,year,password,admin}=req.body;
    try {
        const user= await User.create({
            rollnumber,
            email,
            year,
            password,
            admin
        })
        res.cookie('user', user, {
            httpOnly: true,
            secure: true
        });
        console.log("Successful Signup");
        res.status(200).send("Welcome Aboard Sir");
        
    } catch (error) {
        console.log("An error occured",error);
        res.status(500).send(User)
    }
    
}

async function HandleUserLogin(req,res){
    const {email,password,admin,year}=req.body
    try {
        const LoggedinUser=await User.find({email,password,admin,year}).select('_id admin');
        if(!LoggedinUser){
            res.status(202).send('Signup needed');
        }
        else
        {
            const isidpresent= LoggedinUser[0].id?true:false;
            return res.status(200).send({admin:LoggedinUser[0].admin,user:isidpresent});
        }
    } catch (error) {
        res.status(223).send('Internal login error');
    } 
}

async function HandleUserLogout(req,res){
    
}
module.exports={HandleUserSignUp ,HandleUserLogin, HandleUserLogout }