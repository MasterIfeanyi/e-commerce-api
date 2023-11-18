const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const validations = require('../utils/index')
const middleware = require('../middleware/index')

router.post('/api/register',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[201] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Registration"
            }  
        }
    }
} 
*/ validations.utils.signupValidation, validations.utils.validation, middleware.verifySignUp.userSignUpverification, controller.userController.UserAuth.registration )

router.post('/api/login',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[200] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Login"
            }  
        }
    }
} 
*/ validations.utils.loginValidation, validations.utils.validation, controller.userController.UserAuth.login)

router.post('/api/refreshtoken',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[200] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Refreshtoken"
            }  
        }
    }
} 
*/ validations.utils.refreshTokenValidation, validations.utils.validation, controller.userController.UserAuth.refreshAndVerifyToken)

router.post('/api/logout',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[200] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Login"
            }  
        }
    }
} 
*/ validations.utils.logoutValidation, validations.utils.validation, controller.userController.UserAuth.logout)

router.post('/api/forgot-password',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[200] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Login"
            }  
        }
    }
} 
*/ validations.utils.forgotPasswordValidation, validations.utils.validation, controller.userController.UserAuth.forgotPassword)

router.patch('/api/update-password/token',  /* #swagger.security = [{
    "bearerAuth": []
}] */  /* #swagger.tags = ['Authentication'] */    /*  #swagger.responses[200] = {
    required: true,
    content: {
        "application/json": {
            schema: {
                $ref: "#/components/schemas/Login"
            }  
        }
    }
} 
*/ validations.utils.resetPasswordValidation, validations.utils.validation, controller.userController.UserAuth.resetPassword)


module.exports = router
