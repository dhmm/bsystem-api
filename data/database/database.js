const { Sequelize } = require('sequelize');
module.exports = new Sequelize('bsys', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});