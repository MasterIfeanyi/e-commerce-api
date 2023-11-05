const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../controller/roles/seller.controller')
const upload = multer({ storage })
const controller = require('../controller/index')
const middleware = require('../middleware/index')
const validations = require('../utils/index')


router.post('/sellers/product', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, upload.fields([{ name : 'display_image', maxCount : 1 }, { name : 'images', maxCount : 3}]) , controller.sellerRoleController.Seller.addProduct)

router.get('/sellers/product-list',middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.listProducts)

router.patch('/sellers/product/:id',middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.updateProduct)

router.delete('/sellers/product/:id',middleware.userTokenVerification,  middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.deleteProduct)

module.exports = router