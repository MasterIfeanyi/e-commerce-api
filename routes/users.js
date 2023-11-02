const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/profile/add', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.createProfile)

router.get('/profile/view', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.getProfile)

router.patch('/profile/update/', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.updateProfile )

router.post('/account/delete/', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.deleteAccount)



module.exports = router
