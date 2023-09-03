//create express server 
const express= require('express');
const multer= require('multer');
const path= require('path');
const mongoose= require('mongoose');
const UserModel= require('./model');

const app= express();
app.use(express.json());
app.use("/upload",express.static('uploads'))
//Connect with DB
mongoose.connect("mongodb://127.0.0.1:27017/auth")
.then(()=>console.log("Connecte....."))
.catch((err)=>console.log(err))

const storage= multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})
//initialize a multer
const upload= multer({
    storage:storage,
    limits:{fileSize:100000},//1 MB
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
})

app.post("/profileupload",upload.single("image"),
async(req,res)=>{
    if(req.file){
        let newUser= new UserModel();
        newUser.profileImg=req.file.filename;
        try {
            const resp= await newUser.save();
            res.status(200).send({message:"File uploaded",resp});
        } catch (error) {
            res.status(500).send({message:"error occured",error})
        }
    }else{
        res.status(400).send("File not uplploaded")
    }
})

app.get("/profile/:id",async(req,res)=>{
    const id= req.params.id;
    try {
        const resp= await UserModel.findById(id);
        res.send('http://localhost:5000/upload/'+resp.profileImg)
    } catch (error) {
        res.send(error)
    }
})

app.get("/downloadprofile/:id",async(req,res)=>{
    const id= req.params.id;
    try {
        const resp= await UserModel.findById(id);
        res.download(`uploads/${resp.profileImg}`)
    } catch (error) {
        res.send(error)
    }
})

app.listen(5000,()=>{
    console.log("App Started");
})

//Checking file Type
const checkFileType=(file,cb)=>{
    const filetypes= /jpeg|jpg|png/; //pattern
    const extName= filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType= filetypes.test(file.mimetype);

    if(extName && mimeType){
        return cb(null,true);
    }else{
        cb("Error... you can upload only JPEG, JPG or PNG files only...")
    }
}
