const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.get('/api/storefronts', /* #swagger.tags = ['Storefront'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ controller.storefrontController.Storefront.listAllProducts)

router.get('/api/storefronts/search',  /* #swagger.tags = ['Storefront'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ controller.storefrontController.Storefront.searchProduct )

router.get('/api/storefronts/categories/list-category',  /* #swagger.tags = ['Storefront'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ controller.categoryController.Category.listCategories)

router.get('/api/storefronts/categories/product/:id',  /* #swagger.tags = ['Storefront'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ controller.categoryController.Category.findCategory)

router.get('/api/catalogs/products/:id',  /* #swagger.tags = ['Storefront'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.catalogController.Catalog.productDetails)


module.exports = router