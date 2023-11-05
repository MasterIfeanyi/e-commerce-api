const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const validations = require('../utils/index')
const middleware = require('../middleware/index')


router.post('/register', validations.utils.signupValidation, validations.utils.validation, middleware.verifySignUp.userSignUpverification, controller.userController.UserAuth.registration)

router.post('/login', validations.utils.loginValidation, validations.utils.validation, controller.userController.UserAuth.login)

router.post('/refreshtoken', validations.utils.refreshTokenValidation, validations.utils.validation, controller.userController.UserAuth.refreshAndVerifyToken)

router.post('/logout', validations.utils.logoutValidation, validations.utils.validation, controller.userController.UserAuth.logout)

router.post('/forgot-password', validations.utils.forgotPasswordValidation, validations.utils.validation, controller.userController.UserAuth.forgotPassword)

router.post('/password-reset/token', validations.utils.resetPasswordValidation, validations.utils.validation, controller.userController.UserAuth.resetPassword)


module.exports = router
