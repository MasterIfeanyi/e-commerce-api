const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class Review extends Model { }

Review.init({
    id : {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false
    },

    title : {
        type : DataTypes.STRING,
        allowNull : false

    },

    content : {
        type : DataTypes.STRING,
        allowNull : false

    }
}, {
    sequelize,
    modelName : 'review',
    createdAt : true,
    updatedAt : true
})
sequelize.sync()

module.exports = { Review }