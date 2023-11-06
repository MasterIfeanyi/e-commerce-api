const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /storefront/product-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all product
 *     responses:
 *       200:
 *         description: products successfully retrieved
*/
router.get('/storefront/product-list', controller.storefrontController.Storefront.listAllProducts)
/** 
 * @openapi
 * /storefront/product/search:
 *  get:
 *     tags:
 *     - Storefront
 *     description: search for a product
 *     responses:
 *       200:
 *         description: products successfully retrieved
*/
router.get('/storefront/product/search', controller.storefrontController.Storefront.searchProduct )
/** 
 * @openapi
 * /storefront/categories/category-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all category
 *     responses:
 *       200:
 *         description: category successfully retrieved
*/
router.get('/storefront/categories/category-list', controller.categoryController.Category.listCategories)
/** 
 * @openapi
 * /storefront/categories/category-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all category
 *     responses:
 *       200:
 *         description: category successfully retrieved
*/
router.get('/storefront/categories/product/:id', controller.categoryController.Category.findCategory)
/** 
 * @openapi
 * /catalog/product/:id:
 *  get:
 *     tags:
 *     - Catalog
 *     description: Get product details
 *     responses:
 *       200:
 *         description: product successfully retrieved
*/
router.get('/catalog/product/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.catalogController.Catalog.productDetails)


module.exports = router