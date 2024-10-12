const mongoose= require('mongoose');

const SubTodoSchema= new mongoose.Schema({
    task:{
        type:String,
        required:True
    },
    date:{
        type:Date,
        required:True
    },
    Status:{
        type:Boolean,
        required:true
    }
})

modules.exports= SubToDo= mongoose.model('SubToDo',SubTodoSchema)