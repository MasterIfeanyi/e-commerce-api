const userService = require('./userService')
const refreshTokenService = require('./refreshtokenService')
const productService = require('./productService')
const roleService = require('./roleService')
const validateService = require('./validatetokenService')
const resetPassword = require('./resetpasswordService')
const categoryService = require('./categoryService')
const profileService = require('./profileService')
const ratingService = require('./ratingService')
const reviewService = require('./reviewService')
const cartService = require('./cartService')
const orderService = require('./orderService')

module.exports = { user : userService.User, refreshTokenService : refreshTokenService.RefreshToken, productService : productService.ProductService,
role : roleService.RoleService, validateService : validateService.ValidateTokenService, resetPassword : resetPassword, category : categoryService.CategoryService,
profileService : profileService.UserProfileService, ratingService : ratingService.RatingService, reviewService : reviewService.ReviewService, cartService : cartService.CartService,
orderService : orderService.OrderService}