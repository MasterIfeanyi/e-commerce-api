const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')


router.post('/carts/product/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.addTocart )

router.get('/carts/product',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.listCart)

router.patch('/carts/increase/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.increaseCart)

router.patch('/carts/decrease/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.decreaseCart)

router.delete('/carts/product/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.deleteCart )

router.get('/carts/subtotal/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.getSubtotal)


module.exports = router