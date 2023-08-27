const jwt= require('jsonwebtoken');
const dotenv= require('dotenv').config();
const UserModel = require('../models/user.model');

//Middleware
//Everytime it will call before accessing some perticular routes
//3 parameters req,res,next -- if everything fine then we allow the user to access next

const isAuthenticated= async(req,res,next)=>{

    const tokenData= req.headers.authorization;
    const token= tokenData.split(" ")[1];
   // console.log(token);
    if(!token){
        return res.status(404).json({message:"You are not Logged In..!"})
    }
    try{
        jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
            if(err){
                return res.status(401).json({message:"Invalid Token..!"})
            }
            req.user=payload;
            next();
        })
    }catch(error){
        console.log(error);
    }
}

module.exports= isAuthenticated;