const bcrypt= require('bcrypt')
const UserModel= require('../models/user_model')
const register=async (req,res)=>{

    const {name,email,password,username}=req.body;

    if(!name || !email || !password ||!username){
        return res.status(400).send('All fields are mandatory');
    }

    const hashPassword=await bcrypt.hash(password,10);
    const newUser= new UserModel({name,email,username,password:hashPassword});

    try{
        const resp= await newUser.save();
        return res.status(201).send({message:"User Created",resp})
    }catch(err){
        return res.status(500).send({message:"Error while creating User",err})
    }
}
const login=async (req,res)=>{

    const {password,username}=req.body;

    if(!password ||!username){
        return res.status(400).send('All fields are mandatory');
    }
    try{
        const user= await UserModel.findOne({username});
        if(!user){
            return res.status(404).send({message:"Not registered Yet",resp})
        }
        const match=await bcrypt.compare(password,user.password);
        if(match){
            return res.status(200).send({message:"User Logged In"})
        }else{
            return res.status(400).send({message:"Invalid Credentials"})
        }
        
    }catch(err){
        return res.status(500).send({message:"Error while Login",err})
    }
}

module.exports={register,login}