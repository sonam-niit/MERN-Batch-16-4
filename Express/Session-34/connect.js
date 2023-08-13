const mongoose= require('mongoose');
const { addPerson, fetchAll, fetchById, fetchByName, updatePerson, deletePerson } = require('./personOperations');
const addUser = require('./userOperations');

mongoose.connect("mongodb://127.0.0.1:27017/admin")
.then(function(resp){console.log("Connected....")})
.catch(function(err){console.log(err)})

//addPerson("Junaid",27,"junaid@gmail.com");
//fetchAll();
//fetchById("64d8ed8a8d6726e092c688c8");
//fetchByName("Junaid")

// updatePerson("64d8ed686822681e68528de2",
// {email:"p@gmail.com",age:32})

//deletePerson("64d8ed686822681e68528de2");

addUser("sonam","sonamsoni","sonam1@gmail.com","123456");