const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })

class Order extends Model { }

Order.init({

    id : {
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },

    quantity : {
        type : DataTypes.BIGINT,
        allowNull : false
    },

    totalAmount : {
        type : DataTypes.BIGINT,
        allowNull : false
    }
    
}, {
    sequelize,
    modelName : 'order',
    createdAt : true,
    updatedAt : true
})

sequelize.sync()

module.exports = { Order }