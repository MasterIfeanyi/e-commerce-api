const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')


router.post('/api/carts/product/:id', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.addTocart )

router.get('/api/carts/product', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.listCart)

router.patch('/api/carts/increase/:id', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.increaseCart)

router.patch('/api/carts/decrease/:id', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.decreaseCart)

router.delete('/api/carts/product/:id', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.deleteCart )

router.get('/api/carts/subtotal', /* #swagger.tags = ['Cart'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.cartController.Cart.getSubtotal)




module.exports = router