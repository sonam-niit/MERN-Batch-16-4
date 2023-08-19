const express= require('express');
const dotenv= require('dotenv');
const connectDB = require('./dbconfig');

const app= express();
dotenv.config();
connectDB();
//JSON Parser
app.use(express.json())

app.use("/api/user",require('./routes/user_routes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server Started on PORT ${process.env.PORT}`);
})