const {Todo}= require("../models/Todo.models");
const {User}=require("../models/User.models");

const HandleTodo= async(req,res)=>{
    const {Task,Status}= req.body; 
    const userid='672f605223a07b4d38cd1de1';
    const user= await User.findOne({_id:userid}); 
    if(!user){
        res.status(404).send('User not found ')
    }
    else{
        try { 
            const ReturnedTodo= await Todo.create({User:userid  ,Task,Status});
            res.status(200).send(ReturnedTodo);
        } catch (error) {
            console.log("An error occured",error);
            res.status(400).send('Gadbad kaar daale')
        }
    }
}
const getTodo= async(req,res)=>{
    const userid='672f605223a07b4d38cd1de1';
    const user= await User.findOne({_id:userid});
    if(!user){
        res.status(404).send('User not found ')
    }
    else{
        try { 
            const ReturnedTodo= await Todo.find({User:userid});
            res.status(200).send(ReturnedTodo);
        } catch (error) {
            console.log("An error occured",error);
            res.status(400).send('Gadbad kaar daale')
        }
    }
}
const updateTodo= async(req,res)=>{
    const {Task}= req.body;
    const userid='672f605223a07b4d38cd1de1';
    const user= await User.findOne({_id:userid});
    if(!user){
        res.status(404).send('User not found ')
    }
    else{
        try { 
            const ReturnedTodo= await Todo.updateOne({User:userid},{Task});
            res.status(200).send(ReturnedTodo);
        } catch (error) {
            console.log("An error occured",error);
            res.status(400).send('Gadbad kaar daale')
        }
    }
}
const deleteTodo= async(req,res)=>{
    const returnedTodo= await Todo.findById(req.params.id);
    const deletiondata= await Todo.deleteOne({_id:returnedTodo._id});
    res.send('todo deleted')
}
module.exports={
    HandleTodo,
    getTodo,
    updateTodo,
    deleteTodo
}