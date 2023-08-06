const express = require('express');
const app= express();

app.set('view engine','pug');

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/user",(req,res)=>{
    res.render('user',{name:"sonam",email:"sonam@gmail.com"})
})

app.listen(5000,()=>{
    console.log("App started")
})