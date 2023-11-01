const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/storefront/products/list', controller.storefront.Storefront.listAllProducts)

router.get('/storefront/products/search', controller.storefront.Storefront.searchProduct )

router.get('/storefront/categories/list')

router.get('/storefront/category/product/list/:Id')



module.exports = router