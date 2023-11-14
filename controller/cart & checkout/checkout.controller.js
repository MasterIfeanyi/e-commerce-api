const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Checkout {

    static async createCheckout(req, res){
        try{
            const cartItems = await service.cartService.getCartItems(req.id)
            const totalAmount = await service.cartService.cartSubtotal(req.id)
            const order = await service.orderService.createOrder(cartItems.quantity, totalAmount, req.id)
            if(!order){
                return res.status(400).json(new ErrorResponse('order not created'))
            }
            return res.status(201).json(new SuccessResponse('order succesfully created', order ))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error creating order'))

        }
    }
}

module.exports = { Checkout }