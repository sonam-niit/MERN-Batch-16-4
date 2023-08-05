//imported express to my app
const express = require('express');

//create Express Server
const app= express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/about",(req,res)=>{
    res.send("About Us Page");
})
//Start Server
app.listen(5000,()=>{
    console.log("My Server Started at port No 5000")
})