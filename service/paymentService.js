const { db } = require('../model/index')

class Payment {
    constructor(model){
        this.model = model
    }

    async createPayment(amount, userId, orderId){
        try{
            const result = await this.model.create({ amount : amount, userId : userId, orderId : orderId })
            return result
        }catch(err){
            throw err
        }
    }
}

module.exports = { Payment : new Payment(db.paymentModel.Payment)}