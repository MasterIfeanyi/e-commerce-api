const userTokenVerification = require('./auth')
const adminAuth = require('./auth')
const sellerAuth = require('./auth')
const userAuth = require('./auth')
const verifySignUp = require('./verify.Signup')
const success = require('./successHandler')
const error = require('./errorHandler')
const checkIfTokenIsBlaclisted = require('./validateToken')
module.exports = { 
    userTokenVerification : userTokenVerification.Authorize.userTokenVerification,
    adminAuth : adminAuth.Authorize.admin,
    sellerAuth : sellerAuth.Authorize.seller,
    userAuth : userAuth.Authorize.user,
    verifySignUp : verifySignUp.VerifySignUp,
    ErrorResponse :   error.ErrorResponse,
    SuccessResponse : success.SuccessResponse,
    checkIfTokenIsBlaclisted : checkIfTokenIsBlaclisted.ValidateToken.checkTokenBlackList
}