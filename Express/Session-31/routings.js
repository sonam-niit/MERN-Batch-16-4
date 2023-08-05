const express= require('express');
const app= express();
//middleware to read the data in JSON format
app.use(express.json())//json parser //body parser

app.get("/",(req,res)=>{
    res.send("Hello From / path for testing")
})
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.status(201).send("User Registered");
})

app.listen(4000,()=>{
    console.log("Server Started");
})