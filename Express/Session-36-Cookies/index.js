const express= require('express');
const mongoose=require('mongoose');
const cookie_parser= require('cookie-parser');

const app= express();

//DB Connect
mongoose.connect("mongodb://127.0.0.1:27017/restapi")
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err))

app.use(express.json());
app.use(cookie_parser());

app.use("/api/auth",require('./user_routes'));

app.listen(5000,()=>{
    console.log("Server Started");
})