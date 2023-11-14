const { Sequelize } = require('sequelize')
const { db } = require('../model/index')

class CartService {

    constructor(model) {
        this.model = model
    }

    async createCart(productId, userId) {
        try {
            const product = await db.productModel.Product.findOne({ where: { id: productId } })
            const result = await this.model.create({ name: product.name, quantity: 1, price: product.price, userId: userId })
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

    async updateCart(quantity, userId) {
        try{
            const result = await this.model.update({ quantity : quantity }, { where : { userId : userId }})
            return result
        }catch(err){
            throw err

        }

    }
    async increaseCart(cartId, userId) {
        try {
            const result1 = await this.model.findOne({ where: { id: cartId, userId, userId } })
            const cartQuantity = result1.quantity+=1
            const result2 = await this.model.update({quantity: cartQuantity}, { where: { id: cartId, userId: userId } })
            return result2
        } catch (err) {
            throw err
        }
    }

    async decreaseCart(cartId, userId) {
        try {
            const result1 = await this.model.findOne({ where: { id: cartId, userId: userId } })
            const cartQuantity = result1.quantity-=1
            const result2 = await this.model.update({ quantity: cartQuantity}, { where: { id: cartId, userId: userId } })
            return result2
        } catch (err) {
            throw err
        }
    }

    async cartSubtotal(userId){
        try{
            const result1 = await this.model.findOne({ where: { userId: userId } })
            const total = result1.price * result1.quantity
            return total
        }catch(err){
            throw err
        }
    }

    async getCartItems(userId){
        try{
            const result = await this.model.findAll({ where : { userId : userId }})
            return result
        }catch(err){
            throw err
        }
    }

    async deleteCart(cartId, userId) {
        try {
            const result = await this.model.destroy({ where: { id: cartId, userId : userId } })
            return result
        } catch (err) {
            throw err

        }
    }
}

module.exports = { CartService: new CartService(db.cartModel.Cart) }