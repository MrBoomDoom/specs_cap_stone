const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    VehicleFav: sequelize.define('vehicle_fav', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    })
}