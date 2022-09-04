const Sequelize = require('sequelize');
const db = new Sequelize({
    database:'test_redux_jwt',
    username:'root',
    host:'localhost',
    dialect:'mysql'
});

module.exports = db;