const { Sequelize, DataTypes } = require("sequelize")
const databaseConnectionString = include("/databaseConnectionSequelize")
const sequelize = new Sequelize(databaseConnectionString)

const petTypeModel = sequelize.define('pet_type', 
    {
        pet_type_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'pet_type',
        timestamps: false,
        singular: 'pet_type',
        plural: 'web_user'
    }
)