const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class Profile extends Model { }

Profile.init({

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: true
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: true
    },

    phone: {
        type: DataTypes.BIGINT,
        allowNull: true
    },


}, {
    sequelize,
    modelName: 'profile',
    createdAt: true,
    updatedAt: true
})
sequelize.sync()
module.exports = { Profile }