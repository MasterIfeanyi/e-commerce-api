const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/products-list', controller.storefrontController.Storefront.listAllProducts)

router.get('/products/search', controller.storefrontController.Storefront.searchProduct )

router.get('/category-list', controller.categoryController.Category.listCategories)

router.get('/category/products-list/:categoryId', controller.categoryController.Category.findCategory)

router.get('/products/:productId', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.catalogController.Catalog.productDetails)


module.exports = router