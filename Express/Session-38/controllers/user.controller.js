const UserModel = require('../models/user.model');

const profile=async (req,res)=>{

    const user= req.user;
    res.send({message:"Profile Page",user})
}

module.exports={profile}