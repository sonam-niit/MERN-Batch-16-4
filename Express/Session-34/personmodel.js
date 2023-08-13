const mongoose= require('mongoose');
//Define a mongoose Schema
const Schema=  mongoose.Schema;

const personSchema= new Schema({
    name:String,
    age:Number,
    email:String
})
//Model based on Schema
const Person= mongoose.model('Person',personSchema);

module.exports=Person;