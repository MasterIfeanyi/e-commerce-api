const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Cart {

    //add product selected by user to cart
    static async addTocart(req, res) {
        try {
            const productId = req.params.id
            const product = await service.productService.findOneProduct(productId)
            if (product.quantity >= 1) {
                const newCart = await service.cartService.createCart(productId, req.id)
                if (!newCart) {
                    return res.status(400).json(new ErrorResponse('product not added to cart'))
                }
                await service.cartService.updateCart(1, req.id)
                await service.productService.decreaseQuantity(1, productId)
                return res.status(201).json(new SuccessResponse('product successfully added to cart', newCart))
            } else {
                return res.status(400).json(new ErrorResponse(' product is out of stock'))

            }

        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error adding product to cart'))

        }
    }

    //list all items in the user cart
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


    //increase the Quantity of the product added to the user cart
    static async increaseCart(req, res) {
        try {
            const cartId = req.params.id
            const cart = await service.cartService.increaseCart(cartId, req.id)
            if (!cart) {
                return res.status(404).json(new ErrorResponse('cart item not found'))
            }
            return res.status(200).json(new SuccessResponse(' product quantity succesfully increased'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error increasing quantity'))
        }
    }

    //decrease the Quantity of the product added to the user cart
    static async decreaseCart(req, res) {
        try {
            const cartId = req.params.id
            const cart = await service.cartService.decreaseCart(cartId, req.id)
            if (!cart) {
                return res.status(404).json(new ErrorResponse('cart item not found'))
            }
            return res.status(200).json(new SuccessResponse(' product quantity succesfully decreased'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error decreasing quantity'))
        }
    }


    //get the subtotal of cart items added by the user
    static async getSubtotal(req, res) {
        try {
            const cart = await service.cartService.cartSubtotal(req.id)
            if (!cart) {
                return res.status(404).json(new ErrorResponse('cart not found'))
            }
            return res.status(200).json(new SuccessResponse('subtotal successfully retrieved', cart))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error retrieving cart subtotal'))
        }

    }


    //delete an item from cart
    static async deleteCart(req, res) {
        try {
            const cartId = req.params.id
            const cart = await service.cartService.deleteCart(cartId, req.id)
            if (!cart) {
                return res.status(404).json(new ErrorResponse('cart item not found'))
            }
            return res.status(200).json(new SuccessResponse('cart item successfully deleted'))
        } catch (err) {
            console.error(err)
            return res.status(500).json(new ErrorResponse('Error deleting cart item'))
        }
    }

}

module.exports = { Cart }