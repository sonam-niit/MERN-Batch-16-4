const express=require('express');
const User= require('../model/user_model')

const router= express.Router();

router.get("/",async (req,res)=>{
    try {
        const found= await User.findAll();
        res.send(found);
    } catch (error) {
        res.send(error);
    }
})
router.post("/",async (req,res)=>{
    const {firstname,lastname}=req.body
    try {
        const resp= await User.create({ firstname,lastname })
        res.status(201).send("Data Inserted")
      } catch (error) {
          res.send(error);
      } 
})
router.get("/:id",async (req,res)=>{
    const id= req.params.id;
    try {
        const found= await User.findByPk(id);
        res.send(found.dataValues);
    } catch (error) {
        res.send(error);
    }
})
router.delete("/:id",async (req,res)=>{
    const id= req.params.id;
    try {
        const found= await User.findByPk(id);
        found.destroy()
        res.send("User Deleted");
    } catch (error) {
        res.send(error);
    }
})
router.put("/:id",async (req,res)=>{
    const id= req.params.id;
    const {firstname,lastname}=req.body;
    try {
        const found= await User.findByPk(id);
        found.firstname=firstname;
        found.lastname=lastname;
        await found.save();
        res.send("User Updated");
    } catch (error) {
        res.send(error);
    }
})

module.exports=router