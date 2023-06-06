const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
   Vehicle: sequelize.define('vehicle', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        imageURL: DataTypes.STRING,
        type: DataTypes.STRING,
        speed: DataTypes.INTEGER,
        brand: DataTypes.STRING,
        engine: DataTypes.STRING,
        priority: DataTypes.INTEGER
    })
}