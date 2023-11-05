const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class User extends Model { }
User.init({

    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
    },


    password: {
        type: DataTypes.BLOB,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'user',
    createdAt: true,
    updatedAt: true


})
sequelize.sync()
module.exports = { User }