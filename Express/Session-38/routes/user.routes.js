const express= require('express');
const {profile} = require('../controllers/user.controller');
const isAuthenticated = require('../middleware/protectedRoute');

const router= express.Router();

//Protected Route
router.get("/profile",isAuthenticated,profile);

module.exports=router;