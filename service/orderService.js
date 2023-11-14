const { db } = require('../model/index')

class OrderService {

    constructor(model){
        this.model = model
    }

    async createOrder(quantity, totalAmount, userId){
        try{
            const result = await this.model.create({ quantity : quantity, totalAmount : totalAmount, userId : userId })
            return result
        }catch(err){
            throw err
        }
    }
}

module.exports = { OrderService : new OrderService(db.orderModel.Order)}