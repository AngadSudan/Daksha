const mongoose= require("mongoose");

const ToDoSchema= new mongoose.Schema({
    Task:{
        type:String,
        required:true,
        index:true,
    },
    SubTodo:[
        {
            type:Schema.types.ObjectId,
            ref:"subTodo"
        }
    ],
    Status:{
        type:Boolean,
        default:false
    }
});
