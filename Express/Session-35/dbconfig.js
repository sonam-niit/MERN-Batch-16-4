const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

async function connectDB(){
    try {
        const conn= await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connected");
    } catch (error) {
        console.log("Error ",error);
    }
}

module.exports= connectDB;