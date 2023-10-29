const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected'))
.catch((err)=>console.log('Error',err))