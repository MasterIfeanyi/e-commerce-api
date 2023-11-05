const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const validations = require('../utils/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /register:
 *  post:
 *     tags:
 *     - Authentication
 *     description: User Registration
 *     responses:
 *       201:
 *         description: user registration succesfull 
*/
router.post('/register', validations.utils.signupValidation, validations.utils.validation, middleware.verifySignUp.userSignUpverification, controller.userController.UserAuth.registration)

/** 
 * @openapi
 * /login:
 *  post:
 *     tags:
 *     - Authentication
 *     description: User Login
 *     responses:
 *       200:
 *         description: user login succesfull 
*/
router.post('/login', validations.utils.loginValidation, validations.utils.validation, controller.userController.UserAuth.login)

/** 
 * @openapi
 * /refreshtoken:
 *  post:
 *     tags:
 *     - Authentication
 *     description: Request new Acces token
 *     responses:
 *       200:
 *         description: request token and access token
*/
router.post('/refreshtoken', validations.utils.refreshTokenValidation, validations.utils.validation, controller.userController.UserAuth.refreshAndVerifyToken)
/** 
 * @openapi
 * /logout:
 *  post:
 *     tags:
 *     - Authentication
 *     description: Log out user
 *     responses:
 *       200:
 *         description: logout was successfull
*/
router.post('/logout', validations.utils.logoutValidation, validations.utils.validation, controller.userController.UserAuth.logout)
/** 
 * @openapi
 * /forgot-password:
 *  post:
 *     tags:
 *     - Authentication
 *     description: Forgot password
 *     responses:
 *       200:
 *         description: reset email was succesfully sent 
*/
router.post('/forgot-password', validations.utils.forgotPasswordValidation, validations.utils.validation, controller.userController.UserAuth.forgotPassword)
/** 
 * @openapi
 * /update-password/token:
 *  patch:
 *     tags:
 *     - Authentication
 *     description: Update password
 *     responses:
 *       200:
 *         description: password update successfull
*/
router.patch('/update-password/token', validations.utils.resetPasswordValidation, validations.utils.validation, controller.userController.UserAuth.resetPassword)


module.exports = router
