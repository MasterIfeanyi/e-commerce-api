const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,{ logging : false})
require('dotenv').config()

class Cart extends Model{}

Cart.init({
    id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        allowNull : false
    },

    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    price : {
        type : DataTypes.BIGINT,
        allowNull : false,
        validate : {
            isInt : true
        }
    }
}, {
    sequelize,
    tableName : 'cart',
    createdAt : true,
    updatedAt : true
})
sequelize.sync()

module.exports = { Cart }