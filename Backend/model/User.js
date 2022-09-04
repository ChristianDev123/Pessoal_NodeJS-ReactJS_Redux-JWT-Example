const Sequelize = require('sequelize');
const db = require('../config/configDB');
const user = db.define('users',{
    id:{
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    email:{
        unique:true,
        allowNull:false,
        type:Sequelize.STRING,
    },
    password:{
        allowNull:false,
        type:Sequelize.STRING,
    }
})

module.exports = user;