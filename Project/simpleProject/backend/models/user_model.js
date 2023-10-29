const mongoose= require('mongoose');

const user_Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const UserModel= mongoose.model('UserModel',user_Schema);
module.exports= UserModel;