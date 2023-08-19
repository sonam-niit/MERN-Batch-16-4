const express= require('express');
const { getAllUsers, getUserById, updateUser, addUser, deleteById } = 
require('../controller/user_controller');

const router= express.Router();

router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.put("/:id",updateUser)
router.post("/",addUser)
router.delete("/:id",deleteById)

module.exports=router;