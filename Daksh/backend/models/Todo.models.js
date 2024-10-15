const mongoose= require("mongoose");

const ToDoSchema= new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    Task:{
        type:String,
        required:true,
        index:true,
    },
    Status:{
        type:Boolean,
        default:false
    }
});
const Todo= mongoose.model("todo",ToDoSchema);

module.exports={
    Todo
}