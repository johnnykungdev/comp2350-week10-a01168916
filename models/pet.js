const { Sequelize, DataTypes } = require("sequelize")
const databaseConnectionString = include('/databaseConnectionSequelize')
const sequelize = new Sequelize(databaseConnectionString)

const petModel = sequelize.define('pet', 
    {
        pet_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        web_user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pet_type_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'pet',
        timestamps: false,
        singular: 'pet',
        plural: 'pet'
    }
)

module.exports = petModel