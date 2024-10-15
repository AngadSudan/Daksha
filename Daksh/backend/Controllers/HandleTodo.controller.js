const {Todo}= require("../models/Todo.models");
const {User}=require("../models/User.models");

const HandleTodo= async(req,res)=>{
    const {UserId,Task,SubTodo,Status}= req.body; 
    const user= await User.findOne({_id:UserId}); 
    if(!user){
        res.status(404).send('User not found ')
    }

    else{
        try { 
            const userId=user._id; 
            await Todo.create({User:userId  ,Task,SubTodo,Status});
            res.status(200).send('Successful Todo Creation');
        } catch (error) {
            console.log("An error occured",error);
            res.status(400).send('Gadbad kaar daale')
        }
    }
}
module.exports={
    HandleTodo
}