// const mongoose= require("mongoose");

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },rollnumber:{
        type:Number,
        required:true,
        unique:true
    },email:{
        type:String,
        required:true,
        unique:true      
    },year:{
        type:Number,
        required:true
    },password:{
        type:String,
        required:true
    },admin:{
        type:Boolean,
        required:true
    }
})

