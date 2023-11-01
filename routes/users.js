const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/users/profile/add', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.account.UserAccount.createProfile)

router.get('/users/profile/view', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.account.UserAccount.getProfile)

router.patch('/users/profile/update/', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.account.UserAccount.updateProfile )

router.post('/users/account/delete/', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.account.UserAccount.deleteAccount)



module.exports = router
