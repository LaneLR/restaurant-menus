const {sequelize} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Restaurant extends Model {};

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
}, {
    sequelize: sequelize,
    modelName: "Restuarant",
})

module.exports = {Restaurant};