const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/storefront/product-list', controller.storefrontController.Storefront.listAllProducts)

router.get('/storefront/product/search', controller.storefrontController.Storefront.searchProduct )

router.get('/categories/category-list', controller.categoryController.Category.listCategories)

router.get('/categories/product/:id', controller.categoryController.Category.findCategory)

router.get('/catalog/product/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.catalogController.Catalog.productDetails)


module.exports = router