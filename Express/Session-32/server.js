const express = require('express');
const cors = require('cors') //to make it accessible to other ports or some other IP
const app= express();
app.use(express.json())//JSON parser to read JSON data coming from client side as request
app.use(cors())
//create one user array considering as DB
let users=[];
//Get All Users
app.get("/users",(req,res)=>{
    res.status(200).send(users);
})
app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const result= users.find((value)=>value.id==id);
    if(result!=undefined){
        res.status(200).send(result);
    }else{
        res.status(404).send("User not available with Id: "+id);
    }
})
app.delete("/users/:id",(req,res)=>{
    const id=req.params.id;
    const result= users.findIndex((value)=>value.id==id);
    if(result>=0){
        users.splice(result,1);
        res.status(200).send("User Deleted");
    }else{
        res.status(404).send("User not available with Id: "+id);
    }
})
//Add New Data
app.post("/users",(req,res)=>{
    const userObj= req.body;
    users.push(userObj);
    res.status(201).send("User Added Successfully")
})

app.listen(5000,()=>{
    console.log("Server Started on PORT 5000")
})