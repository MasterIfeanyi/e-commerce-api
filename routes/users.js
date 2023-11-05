const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/users', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.createProfile)

router.get('/users/profile', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.getProfile)

router.patch('/users/profile-update', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.updateProfile )

router.delete('/users/account', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.deleteAccount)



module.exports = router
