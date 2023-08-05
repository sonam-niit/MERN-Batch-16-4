//imported express to my app
const express = require('express');

//create Express Server
const app= express();
let users=[{id:1,name:"alex"},{id:2,name:"bob"},{id:3,name:"catty"},{id:4,name:"Devid"}]

app.use("/sample",express.static('./files/website'));

app.get("/getAll",(req,res)=>{
    res.send(users);
})
//Dynamic URL
app.get("/get/:id",(req,res)=>{
    const id=req.params.id;
    const result=users.find((value)=> value.id==id)
    if(result!=undefined){
        res.status(302).send(result)
    }else{
        res.status(404).send("No User available with Id "+id)
    }
})
//sending HTML file as resp
app.get("/homepage",(req,res)=>{
    res.status(200).sendFile(__dirname+'/files/index.html');
})
//Always keep at last//404 file
app.use((req,res)=>{
    res.status(404).send("The File Which you are trying to access was not found ")
})
//Start Server
app.listen(5000,()=>{
    console.log("My Server Started at port No 5000")
})