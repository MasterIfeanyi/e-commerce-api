const { Sequelize } = require('sequelize')
const { db } = require('../model/index')

class CartService {

    constructor(model) {
        this.model = model
    }

    async createCart(productId, quantity, userId) {
        try {
            const product = await db.productModel.Product.findOne({ where : {id : productId}})
            const result = await this.model.create({ name : product.name , quantity : quantity, price: product.price, userId: userId })
            return result
        } catch (err) {
            throw err

        }
    }

    async viewCart(id) {
        try {
            const result = await this.model.findAll({ where: { userId: id } })
            return result
        } catch (err) {
            throw err
        }
    }


    async increaseCart(quantity, cartId, userId){
        try{
            const result1 = await this.model.findOne({ where : { id : cartId, userId, userId}})
            const result2 = await this.model.update({ quantity : quantity, price : Sequelize.literal(`price + ${result1.price}`)}, {where : { id : cartId, userId : userId}})
            return result2
        }catch(err){
            throw err
        }
    }

    async decreaseCart(quantity, cartId, userId){
        try{
            const result1 = await this.model.findOne({ where : { id : cartId, userId, userId}})
            const result2 = await this.model.update({ quantity : quantity, price : Sequelize.literal(`price - ${result1.price}`)}, {where : { id : cartId, userId : userId }})
            return result2
        }catch(err){
            throw err
        }
    }

    async deleteCart(id, cartId){
        try{
            const result = await this.model.destroy({ where : { userId : id, id : cartId}})
            return result
        }catch(err){
            throw err

        }
    }
}

module.exports = { CartService : new CartService(db.cartModel.Cart)}