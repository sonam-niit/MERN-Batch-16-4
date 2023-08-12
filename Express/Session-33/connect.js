const { Sequelize, DataTypes } = require('sequelize');

//got the connection
const conn = new Sequelize('sample', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
//Model
const User = conn.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING
    }
})
conn.sync()
    .then(resp => console.log("Table created"))
    .catch(err => console.log(err))

async function insertData(fname, lname) {
    try {
      const resp= await User.create({ firstname:fname, lastname: lname })
      console.log("Data Inserted");
    } catch (error) {
        console.log(error);
    }  
}
//insertData("Vibhuti","vartak");
async function fetchById(id){
    try {
        const found= await User.findByPk(id);
        console.log("found ",found.dataValues);
    } catch (error) {
        console.log(error);
    }
}
//fetchById(2);
async function updateById(id,lname){
    try {
        const found= await User.findByPk(id);
        found.lastname=lname;
        await found.save();
        console.log("User updated");
    } catch (error) {
        console.log(error);
    }
}
//updateById(2,"Singh")
async function deleteById(id){
    try {
        const found= await User.findByPk(id);
        found.destroy();
        console.log("User Deleted with id "+id);
    } catch (error) {
        console.log(error);
    }
}
deleteById(2);