const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /api/storefront/product-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all product
 *     responses:
 *       200:
 *         description: products successfully retrieved
*/
router.get('/api/storefronts/products/list-product', controller.storefrontController.Storefront.listAllProducts)
/** 
 * @openapi
 * /api/storefront/product/search:
 *  get:
 *     tags:
 *     - Storefront
 *     description: search for a product
 *     responses:
 *       200:
 *         description: products successfully retrieved
*/
router.get('/api/storefronts/products/search', controller.storefrontController.Storefront.searchProduct )
/** 
 * @openapi
 * /api/storefront/categories/category-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all category
 *     responses:
 *       200:
 *         description: category successfully retrieved
*/
router.get('/api/storefronts/categories/list-category', controller.categoryController.Category.listCategories)
/** 
 * @openapi
 * /api/storefront/categories/category-list:
 *  get:
 *     tags:
 *     - Storefront
 *     description: list all category
 *     responses:
 *       200:
 *         description: category successfully retrieved
*/
router.get('/api/storefronts/categories/product/:id', controller.categoryController.Category.findCategory)
/** 
 * @openapi
 * /api/catalog/product/:id:
 *  get:
 *     tags:
 *     - Catalog
 *     description: Get product details
 *     responses:
 *       200:
 *         description: product successfully retrieved
*/
router.get('/api/catalogs/products/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth, controller.catalogController.Catalog.productDetails)


module.exports = router