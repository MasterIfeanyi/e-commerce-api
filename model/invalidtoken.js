const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class InvalidToken extends Model { }
InvalidToken.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },

    jwt_token: {
        type: DataTypes.STRING,
        allow: false
    }
}, {
    sequelize,
    modelName: 'invalidtoken',
    createdAt: true,
    updatedAt: true
})
sequelize.sync()

module.exports = { InvalidToken }