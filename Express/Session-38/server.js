const express= require('express');
const mongoose= require('mongoose');

const app= express();

mongoose.connect("mongodb://127.0.0.1:27017/auth")
.then(resp=>console.log("Conectted...."))
.catch(err=>console.log("Error",err))

app.use(express.json());
//Auth route for register and Login
app.use("/api/auth",require('./routes/auth.routes'));
app.use("/api/user",require('./routes/user.routes'))

app.listen(5000,()=>{
    console.log("Server Started");
})