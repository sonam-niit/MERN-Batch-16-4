const express = require('express');
const dotenv= require('dotenv');
const cors= require('cors');
dotenv.config();
require('./dbconfig')//load DB Connection

const app= express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/user_route'))

app.listen(process.env.PORT,()=>{
    console.log("Server Started..")
})