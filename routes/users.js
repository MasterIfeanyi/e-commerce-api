const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/users', /* #swagger.tags = ['User'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.createProfile)

router.get('/api/users/profile', /* #swagger.tags = ['User'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.getProfile)

router.patch('/api/users/update-profile', /* #swagger.tags = ['User'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.updateProfile )

router.delete('/api/users/account',  /* #swagger.tags = ['User'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.deleteAccount)


module.exports = router
