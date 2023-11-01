const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/catalog/products/:productId', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.storefront.Storefront.listAllProducts)

router.post('/catalog/products/cart/add', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.storefront.Storefront.searchProduct )

router.post('/catalog/products/carts/remove/:productId')

router.post('/catalog/products/review/add')

router.post('/catalog/products/rating/add')

module.exports = router