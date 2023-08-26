const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const register = async (req, res) => {

    const { name, email, username, password } = req.body;
    try {
        if (!name || !email || !password || !username) {
            return res.status(403).send({ message: "Fields can not be empty" })
        }
        let user =await UserModel.findOne({ email });
        if (user) {
            return res.status(403).send({ message: "email is already registred" })
        }
        user =await UserModel.findOne({ username });
        if (user) {
            return res.status(403).send({ message: "Username is already taken by Someone" })
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new UserModel({name, email, username, password: hashPassword});

        const resp=await newUser.save();
        return res.status(201).send({ message: "User Registered",resp })

    } catch (error) {
        console.log(error);
    }
}

const login=async (req,res)=>{

    const {username, password } = req.body;
    try {
        if (!password || !username) {
            return res.status(403).send({ message: "Username and Password is Mandatory" })
        }
       let user =await UserModel.findOne({ username });
        if (!user) {
            return res.status(403).send({ message: "Username is not registered with Us" })
        }
        else{
            const resp=await bcrypt.compare(password,user.password);
            if(resp){
                return res.status(200).send({ message: "Successfully Logged In",user})
            }else{
                return res.status(403).send({ message: "Incorrect Password" })
            }
        }

    } catch (error) {
        console.log(error);
    }

}
module.exports={register,login}