const express= require('express');
const mongoose=require('mongoose');
const session= require('express-session');

const app= express();

//DB Connect
mongoose.connect("mongodb://127.0.0.1:27017/restapi")
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err))

app.use(express.json());
//user Session 
app.use(session({
    secret:'123456789jsadasd',
    resave:false,
    saveUninitialized:true
}))

app.use("/api/auth",require('./user_routes'));

app.listen(5000,()=>{
    console.log("Server Started");
})