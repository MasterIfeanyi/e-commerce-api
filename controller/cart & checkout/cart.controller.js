const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Cart {

    static async addTocart(req, res) {
        const productId = req.params.id
        const { quantity } = req.body
        try {
            const product = await service.productService.findOneProduct(productId, req.id)
            if (product.quantity >= quantity) {
                const newCart = await service.cartService.createCart(productId, quantity, req.id)
                if (!newCart) {
                    return res.status(400).json(new ErrorResponse('product not added to cart'))
                }
                await service.productService.decreaseQuantity(quantity, req.id)
                return res.status(201).json(new SuccessResponse('product successfully added to cart', newCart))
            } else {
                return res.status(400).json(new ErrorResponse(' product is out of stock'))

            }

        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error adding product to cart'))

        }
    }

    static async listCart(req, res) {
        try {
            const cart = await service.cartService.viewCart(req.id)
            if (!cart) {
                return res.status(400).json(new ErrorResponse('cart items not retrieved'))
            }
            return res.status(200).json(new SuccessResponse('cart items successfully retrieved', cart))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error retrieving cart item'))
        }
    }

    static async increaseCart(req, res) {
        const cartId = req.params.id
        const { quantity } = req.body
        try {
            const cart = await service.cartService.increaseCart(quantity, cartId, req.id)
            if(!cart){
                return res.status(400).json( new ErrorResponse('product quantity not increased'))
            }
            return res.status(200).json( new SuccessResponse(' product quantity succesfully increased'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error increasing quantity'))
        }
    }

    static async decreaseCart(req, res) {
        const cartId = req.params.id
        const { quantity } = req.body
        try {
            const cart = await service.cartService.decreaseCart(quantity, cartId, req.id)
            if(!cart){
                return res.status(400).json( new ErrorResponse('product quantity not decreased'))
            }
            return res.status(200).json( new SuccessResponse(' product quantity succesfully decreased'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error decreasing quantity'))
        }
    }


    static async deleteCart(req, res) {
        const cartId = req.params.id
        try {
            const cart = await service.cartService.deleteCart(cartId, req.id)
            if (!cart) {
                return res.status(400).json(new ErrorResponse('cart not deleted'))
            }
            return res.status(200).json(new SuccessResponse('cart item deleted'))
        } catch (err) {
            return res.status(500).json(new ErrorResponse('Error deleting cart item'))
        }
    }

}

module.exports = { Cart }