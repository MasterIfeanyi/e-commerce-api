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

db.userModel.User.belongsToMany(db.roleModel.Role, { through : 'user_role', onDelete : 'CASCADE'})

db.roleModel.Role.belongsToMany(db.userModel.User, { through : 'user_role', onDelete : 'CASCADE'})

db.refreshTokenModel.RefreshToken.belongsTo(db.userModel.User, { foreignKey : 'id',  onDelete : 'CASCADE' })

db.userModel.User.hasOne(db.refreshTokenModel.RefreshToken, {  foreignKey : 'id', onDelete : 'CASCADE'})

db.profileModel.Profile.belongsTo(db.userModel.User, {  onDelete : 'CASCADE'})

db.userModel.User.hasOne(db.productModel.Product, { onDelete : 'CASCADE'})

db.categoryModel.Category.belongsToMany(db.productModel.Product, { through : 'product_category' , onDelete : 'CASCADE'})

db.productModel.Product.belongsToMany(db.categoryModel.Category, { through : 'product_category' , onDelete : 'CASCADE'})

db.userModel.User.hasMany(db.productModel.Product, { onDelete : 'CASCADE'})

db.productModel.Product.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})

db.userModel.User.hasMany(db.cartModel.Cart, { onDelete : 'CASCADE'})

db.cartModel.Cart.belongsTo(db.userModel.User, { onDelete : 'CASCADE'})



db.ROLE = ["user", "seller", "admin"]


module.exports = { db }
