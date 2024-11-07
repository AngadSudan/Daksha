const mongoose= require('mongoose');

const SubTodoSchema= new mongoose.Schema({
    task:{
        type:String,
        required:True
    }
})

modules.exports= SubToDo= mongoose.model('SubToDo',SubTodoSchema)