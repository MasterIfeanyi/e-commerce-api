const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../controller/roles/seller.controller')
const upload = multer({ storage })
const controller = require('../controller/index')
const middleware = require('../middleware/index')
const validations = require('../utils/index')

/** 
 * @openapi
 * /api/seller/product:
 *  post:
 *     tags:
 *     - Seller
 *     description: Add a product
 *     responses:
 *       200:
 *         description: product successfully added
*/
router.post('/api/sellers/product', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, upload.fields([{ name : 'display_image', maxCount : 1 }, { name : 'images', maxCount : 3}]) , controller.sellerRoleController.Seller.addProduct)
/** 
 * @openapi
 * /api/seller/product:
 *  get:
 *     tags:
 *     - Seller
 *     description: Get a list of all products added by the seller
 *     responses:
 *       200:
 *         description: product successfully retrieved
*/
router.get('/api/sellers/list-product',middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.listProducts)
/** 
 * @openapi
 * /api/sellers/product:id:
 *  patch:
 *     tags:
 *     - Seller
 *     description: Update your product
 *     responses:
 *       200:
 *         description: product successfully updated
*/
router.patch('/api/sellers/update-product/:id',middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.updateProduct)
/** 
 * @openapi
 * /api/sellers/product/:id:
 *  post:
 *     tags:
 *     - Seller
 *     description: Delete a product
 *     responses:
 *       200:
 *         description: product successfully deleted
*/
router.delete('/api/sellers/delete-product/:id',middleware.userTokenVerification,  middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.sellerRoleController.Seller.deleteProduct)

module.exports = router