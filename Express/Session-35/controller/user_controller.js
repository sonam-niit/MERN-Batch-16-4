const User= require('../models/user_model')
const addUser= async (req,res)=>{

    const {name,email,username,password}= req.body;
    try {
        if(!name || !email || !username || !password){
            return res.status(400).send({message:"All Fields are mandatory"});
        }
        let user=await User.findOne({email:email});
        if(user){
            return res.status(400).send({message:"Email Id already registered"});
        }
        user=await User.findOne({username:username});
        if(user){
           return res.status(400).send({message:"Username already registered"});
        }
        let newUser= new User({name,username,email,password});
        const resp= await newUser.save();
        return res.status(201).send({message:"User registered Successfully ",resp});
    } catch (error) {
        res.status(400).send({message:"Error in registration ",error});
    }

}
const getAllUsers= async (req,res)=>{
    try {
        let resp=await User.find();
        return res.status(200).send(resp);
    } catch (error) {
        res.status(400).send({message:"Error while fetching data ",error});
    }

}
const getUserById= async (req,res)=>{
    const id= req.params.id;
    console.log(id);
    try {
        let resp=await User.findById(id);
        if(resp==undefined){
            return res.status(404).send({message:"User not Found"});
        }
        else{
            return res.status(200).send(resp);
        }
    } catch (error) {
        res.status(400).send({message:"Error while fetching data ",error});
    }
}
const updateUser= async (req,res)=>{
    const id= req.params.id;
    try {
        let resp=await User.findByIdAndUpdate(id,req.body);
        if(resp==undefined){
            return res.status(404).send({message:"User not Found to update"});
        }
        else{
            return res.status(200).send(resp);
        }
    } catch (error) {
        res.status(400).send({message:"Error while fetching data ",error});
    }
}
const deleteById= async (req,res)=>{
    const id= req.params.id;
    console.log(id);
    try {
        let resp=await User.findByIdAndDelete(id);
        if(resp==undefined){
            return res.status(404).send({message:"User not Found"});
        }
        else{
            return res.status(200).send({message:"User Deleted Successfully"});
        }
    } catch (error) {
        res.status(400).send({message:"Error while fetching data ",error});
    }
}

module.exports={
    addUser,
    getAllUsers,
    updateUser,
    getUserById,
    deleteById
}