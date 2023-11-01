const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../controller/user roles/seller.controller')
const upload = multer({ storage })
const controller = require('../controller/index')
const middleware = require('../middleware/index')
const validations = require('../utils/index')


router.post('/sellers/products/add', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, upload.array('images', 3) , controller.sellerRole.Seller.addProduct)

router.get('/sellers/products/list',middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRole.Seller.listProducts)

router.patch('/seller/products/update/:productId', middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRole.Seller.updateProduct)

router.delete('/seller/products/delete/:productId', middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRole.Seller.deleteProduct)

module.exports = router