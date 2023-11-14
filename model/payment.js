const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })

class Payment extends Model { }

Payment.init({

    id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },

    amount : {
        type : DataTypes.DECIMAL(10, 2),
        allowNull : false,
        validate : {
            isDecimal : true
        }
    }
}, {
    sequelize,
    modelName : 'payment',
    createdAt : true,
    updatedAt : true
})

sequelize.sync()

module.exports = { Payment }