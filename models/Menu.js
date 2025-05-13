const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

class Menu extends Model {};

Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize: sequelize,
    modelName: "Restuarant",
})

module.exports = {Menu};