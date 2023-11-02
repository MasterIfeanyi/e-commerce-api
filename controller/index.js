const userController = require('./auth/user/auth.controller')
const accountController = require('./auth/user/user.account.controller')
const sellerRoleController = require('./roles/seller.controller')
const adminRoleController = require('./roles/admin.controller')
const storefrontController = require('./storefront & catalog/storefront.controller')
const categoryController = require('./categories/category')
module.exports = {  userController, sellerRoleController, adminRoleController, storefrontController, accountController, categoryController }