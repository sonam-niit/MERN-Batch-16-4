const User= require('./usermodel');

async function addUser(name,username,email,password){

    try {
        let user=await User.findOne({email:email});
        if(user){
            return console.log("Email Id already registered");
        }
        user=await User.findOne({username:username});
        if(user){
           return console.log("Username already registered");
        }
        let newUser= new User({name,username,email,password});
        const resp= await newUser.save();
        return console.log("User registered Successfully ",resp);
    } catch (error) {
        console.log("Error in registration ",error);
    }

}
module.exports= addUser;