const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const validations = require('../utils/index')
const middleware = require('../middleware/index')


router.post('/api/auth/register', validations.utils.signupValidation, validations.utils.validation, middleware.verifySignUp.userSignUpverification, controller.userController.UserAuth.registration)

router.post('/api/auth/login', validations.utils.loginValidation, validations.utils.validation, controller.userController.UserAuth.login)

router.post('/api/auth/refreshToken', validations.utils.refreshTokenValidation, validations.utils.validation, controller.userController.UserAuth.refreshAndVerifyToken)

router.post('/api/auth/logout', validations.utils.logoutValidation, validations.utils.validation, controller.userController.UserAuth.logout)

router.post('/api/auth/forgot-password', validations.utils.forgotPasswordValidation, validations.utils.validation, controller.userController.UserAuth.forgotPassword)

router.post('/api/auth/password-reset/token', validations.utils.resetPasswordValidation, validations.utils.validation, controller.userController.UserAuth.resetPassword)
// router.get('/api/user/products/:productId')

// router.get('/api/user/products/list', middleware.adminTokenVerification, controller.adminController.Admin.listProducts)

// router.patch('/api/user/products/update/:productId')

// router.delete('/api/users/products/delete/:productId')




module.exports = router
