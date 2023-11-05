const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class Product extends Model { }
Product.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },


    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    display_image : {
        type : DataTypes.STRING,
        allowNull : false

    },

    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },

    brand: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    price: {
        type: DataTypes.BIGINT,
        validate: {
            isInt: true
        },
        allowNull: false

    },

    variant: {
        type: DataTypes.STRING,

    },

    availability: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity : {
        type : DataTypes.BIGINT,
        allowNull : false,
        validate : {
            isNumeric : true
        }
    }

}, {
    sequelize,
    modelName: 'product',
    createdAt: true,
    updatedAt: true
})
sequelize.sync()
// Product.sync()
module.exports = { Product }