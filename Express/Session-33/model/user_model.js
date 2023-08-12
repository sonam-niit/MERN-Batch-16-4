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

module.exports=User;