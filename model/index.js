const db = {}
db.userModel = require('./user')
db.roleModel = require('./role')
db.productModel = require('./product')
db.categoryModel = require('./category')
db.profileModel = require('./profile')
db.refreshTokenModel = require('./refreshtoken')
db.invalidtokenModel = require('./invalidtoken')
db.passwordresettokenModel = require('./passwordreset')
db.cartModel = require('./cart')
db.reviewModel = require('./reviev')
db.ratingModel = require('./rating')

// M : M Assocaiation
db.userModel.User.belongsToMany(db.roleModel.Role, { through : 'user_role', onDelete : 'CASCADE'})

db.roleModel.Role.belongsToMany(db.userModel.User, { through : 'user_role', onDelete : 'CASCADE'})

// 1 : 1 Association
db.refreshTokenModel.RefreshToken.belongsTo(db.userModel.User, { foreignKey : 'id',  onDelete : 'CASCADE' })

db.userModel.User.hasOne(db.refreshTokenModel.RefreshToken, {  foreignKey : 'id', onDelete : 'CASCADE'})

// 1 : 1 Association
db.profileModel.Profile.belongsTo(db.userModel.User, {  onDelete : 'CASCADE'})

db.userModel.User.hasOne(db.profileModel.Profile, { onDelete : 'CASCADE'})

// 1 : M Association
db.categoryModel.Category.hasMany(db.productModel.Product, {onDelete : 'CASCADE'})

db.productModel.Product.belongsTo(db.categoryModel.Category, { onDelete : 'CASCADE'})

// 1 : M Association
db.userModel.User.hasMany(db.productModel.Product, { onDelete : 'CASCADE'})

db.productModel.Product.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})

// 1 : M Association
db.userModel.User.hasMany(db.cartModel.Cart, { onDelete : 'CASCADE'})

db.cartModel.Cart.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})

// 1 : M Association
db.userModel.User.hasMany(db.reviewModel.Review, { onDelete : 'CASCADE'})

db.reviewModel.Review.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})

// 1 : M Association
db.userModel.User.hasMany(db.ratingModel.Rating, { onDelete : 'CASCADE'})

db.ratingModel.Rating.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})


//Roles
db.ROLE = ["user", "seller", "admin"]


module.exports = { db }
