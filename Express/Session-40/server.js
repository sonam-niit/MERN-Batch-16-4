const express= require('express');
const mongoose= require('mongoose');
const app= express();
 
app.use(express.json()); //JSON Parser

//DB Config
mongoose.connect('mongodb://127.0.0.1:27017/auth')
.then(()=>console.log("Connectedd..."))
.catch((err)=>console.log("Error ",err))

app.use("/api/product",require('./routes')); //Router Configuration

//Global Error Handler
app.use((err,req,res,next)=>{
   // console.log("Error",err);
    res.status(500).json({error: 'Something went wrong'})
})

app.listen(5000,()=>{
    console.log("Server started on port 5000");
})