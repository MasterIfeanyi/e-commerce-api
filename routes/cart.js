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
router.post('/api/carts/product/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.addTocart )
/** 
 * @openapi
 * /api/carts/product:
 *  get:
 *     tags:
 *     - Cart
 *     description: Get a product in  cart
 *     responses:
 *       200:
 *         description: product successfully retrieved
*/
router.get('/api/carts/product',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.listCart)
/** 
 * @openapi
 * /api/carts/increase/:id:
 *  patch:
 *     tags:
 *     - Cart
 *     description: Increase the qunatity of product added to cart
 *     responses:
 *       200:
 *         description: product quantity successfully increased
*/
router.patch('/api/carts/increase/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.increaseCart)
/** 
 * @openapi
 * /api/carts/decrease/:id:
 *  patch:
 *     tags:
 *     - Cart
 *     description: Decrease the quantity of product added to cart
 *     responses:
 *       200:
 *         description: product quantity successfully decreased
*/
router.patch('/api/carts/decrease/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.decreaseCart)
/** 
 * @openapi
 * /api/carts/product/:id:
 *  delete:
 *     tags:
 *     - Cart
 *     description: Delete cart item
 *     responses:
 *       200:
 *         description: product  successfully deleted
*/
router.delete('/api/carts/product/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.deleteCart )
/** 
 * @openapi
 * /api/carts/subtotal:
 *  get:
 *     tags:
 *     - Cart
 *     description: Get the subtotal of cart
 *     responses:
 *       200:
 *         description:cart subtotal successfully retrieved
*/
router.get('/api/carts/subtotal', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.getSubtotal)




module.exports = router