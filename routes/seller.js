const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../controller/roles/seller.controller')
const upload = multer({ storage })
const controller = require('../controller/index')
const middleware = require('../middleware/index')
const validations = require('../utils/index')

router.post('/api/sellers/product',  /* #swagger.tags = ['Seller'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, upload.fields([{ name : 'display_image', maxCount : 1 }, { name : 'images', maxCount : 3}]) , controller.sellerRoleController.Seller.addProduct)

router.get('/api/sellers/list-product',   /* #swagger.tags = ['Seller'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.listProducts)

router.patch('/api/sellers/update-product/:id',   /* #swagger.tags = ['Seller'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.updateProduct)

router.delete('/api/sellers/delete-product/:id',   /* #swagger.tags = ['Seller'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification,  middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.deleteProduct)

module.exports = router