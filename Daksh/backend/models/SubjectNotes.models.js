const mongoose= require('mongoose');

const SubjectNotesSchema= new mongoose.Schema({
    Subject:{
        type:String,
        required:true,
    },Chapter:{
        type:String,
        required:true,
    },title:{
        type:String,
        required:true
    }
    ,Url:{
        type:String,
        required:true,
        unique:true
    }
})

const SubjectModel= mongoose.model('subject',SubjectNotesSchema);

module.exports={
    SubjectModel
}