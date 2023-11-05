const userController = require('./auth/user/auth.controller')
const accountController = require('./auth/user/user.account.controller')
const sellerRoleController = require('./roles/seller.controller')
const adminRoleController = require('./roles/admin.controller')
const storefrontController = require('./storefront & catalog/storefront.controller')
const catalogController = require('./storefront & catalog/catalog.controller')
const categoryController = require('./categories/category')
const reviewController = require('./review & rating/review.controller')
const ratingController = require('./review & rating/rating.controller')
const cartController = require('./cart & checkout/cart.controller')
module.exports = {  userController, sellerRoleController, adminRoleController, storefrontController, catalogController, accountController, categoryController,
reviewController, ratingController, cartController }