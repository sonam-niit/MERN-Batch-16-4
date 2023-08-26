const express= require('express');
const mongoose= require('mongoose');

const app= express();

mongoose.connect("mongodb://127.0.0.1:27017/auth")
.then(resp=>console.log("Conectted...."))
.catch(err=>console.log("Error",err))

app.use(express.json());

app.use("/api/auth",require('./routes/user.routes'));

app.listen(5000,()=>{
    console.log("Server Started");
})