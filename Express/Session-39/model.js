const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const userModel= Schema({
    profileImg:{
        type:String
    }
})

module.exports= mongoose.model("UserModel",userModel);