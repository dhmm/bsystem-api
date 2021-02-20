const database = require('./../database/database.js');
const { DataTypes } = require('sequelize');

const User = database.define( 'user' , {
    fullName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
}, {
    database,
    modelName: 'user',
    timestamps: false,    
    createdAt: false,
});
module.exports = User;