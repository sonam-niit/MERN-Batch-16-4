const express=require('express');

const router= express.Router();

router.get("/",(req,res)=>{
    res.send("Get All Customers")
})
router.post("/",(req,res)=>{
    res.send("Added New Customer")
})
//Dynamic Routes
router.get("/:id",(req,res)=>{
    res.send("Get Customer By Id: "+req.params.id)
})

module.exports=router