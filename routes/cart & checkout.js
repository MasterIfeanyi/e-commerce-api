const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /carts/product/:id:
 *  post:
 *     tags:
 *     - Cart
 *     description: Add to cart
 *     responses:
 *       200:
 *         description: product successfully added
*/
router.post('/carts/product/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.addTocart )
/** 
 * @openapi
 * /carts/product:
 *  get:
 *     tags:
 *     - Cart
 *     description: Get a product in  cart
 *     responses:
 *       200:
 *         description: product successfully retrieved
*/
router.get('/carts/product',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.listCart)
/** 
 * @openapi
 * /carts/increase/:id:
 *  patch:
 *     tags:
 *     - Cart
 *     description: Increase the qunatity of product added to cart
 *     responses:
 *       200:
 *         description: product quantity successfully increased
*/
router.patch('/carts/increase/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.increaseCart)
/** 
 * @openapi
 * /carts/decrease/:id:
 *  patch:
 *     tags:
 *     - Cart
 *     description: Decrease the quantity of product added to cart
 *     responses:
 *       200:
 *         description: product quantity successfully decreased
*/
router.patch('/carts/decrease/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.decreaseCart)
/** 
 * @openapi
 * /carts/product/:id:
 *  delete:
 *     tags:
 *     - Cart
 *     description: Delete cart item
 *     responses:
 *       200:
 *         description: product  successfully deleted
*/
router.delete('/carts/product/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.deleteCart )
/** 
 * @openapi
 * /carts/subtotal:
 *  get:
 *     tags:
 *     - Cart
 *     description: Get the subtotal of cart
 *     responses:
 *       200:
 *         description:cart subtotal successfully retrieved
*/
router.get('/carts/subtotal', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.getSubtotal)


module.exports = router