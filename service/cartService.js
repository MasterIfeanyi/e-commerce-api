const { db } = require('../model/index')

class CartService {
    constructor(model) {
        this.model = model
    }

    async createCartItem(quantity, price, id) {
        try {
            const result = await this.model.create({ quantity: quantity, price: price, userId: id })
            return result
        } catch (err) {
            throw err

        }
    }

    async viewCartItems(id) {
        try {
            const result = await this.model.findAll({ where: { userId: id } })
            return result
        } catch (err) {
            throw err
        }
    }

    async deleteCartItem(id, cartId){
        try{
            const result = await this.model.delete({ where : { userId : id, cartId}})
            return result
        }catch(err){
            throw err

        }
    }
}