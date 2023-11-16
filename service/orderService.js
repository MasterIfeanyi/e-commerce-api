const { db } = require('../model/index')

class OrderService {

    constructor(model){
        this.model = model
    }

    async createOrder(totalAmount, userId){
        try{
            const result1 = await db.cartModel.Cart.findAll({ where: { userId: userId } })
            const quantity = result1.reduce((previousValue, currentValue)=>{
                //sum up the Quantity of all items from Cart
                const sumQunatity = previousValue + currentValue.quantity 
                return sumQunatity
            }, 0)
            const result2 = await this.model.create({ quantity : quantity , totalAmount : totalAmount, userId : userId })
            return result2
        }catch(err){
            throw err
        }
    }

    async findOrder(userId){
        try{
            const result = await this.model.findOne({ where : { id : userId }})
            return result
        }catch(err){
            throw err
        }
    }
}

module.exports = { OrderService : new OrderService(db.orderModel.Order)}