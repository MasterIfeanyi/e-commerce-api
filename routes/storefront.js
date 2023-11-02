const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/storefront/products/list', controller.storefrontController.Storefront.listAllProducts)

router.get('/storefront/products/search', controller.storefrontController.Storefront.searchProduct )

router.get('/storefront/categories/list', controller.categoryController.Category.listCategories)

router.get('/storefront/category/product/list/:Id', controller.categoryController.Category.findCategory)



module.exports = router