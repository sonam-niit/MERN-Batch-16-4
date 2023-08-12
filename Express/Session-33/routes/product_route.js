const express=require('express');

const router= express.Router();

router.get("/",(req,res)=>{
    res.send("Get All Product")
})
router.post("/",(req,res)=>{
    res.send("Added New Product")
})
router.get("/:id",(req,res)=>{
    res.send("Get product By Id: "+ req.params.id)
})

module.exports=router