const userController = require('./auth/user.controller')
const account = require('./auth/user/user.account.controller')
const sellerRole = require('./user roles/seller.controller')
const adminRole = require('./user roles/admin.controller')
const storefront = require('./storefront/storefront.controller')
module.exports = {  userController, sellerRole, adminRole, storefront, account }