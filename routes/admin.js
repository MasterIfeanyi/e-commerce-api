const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/admin/users/add',middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRole.Admin.addUser)

router.get('/admin/users/list', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRole.Admin.listUser)

router.delete('/admin/users/delete/:userId', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.adminAuth, controller.adminRole.Admin.deleteUser )

router.post('/admin/category/add',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.adminAuth,)

router.get('/admin/category/list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.adminAuth,)

router.patch('/admin/category/delete/:Id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.adminAuth,)

router.delete('/admin/category/update/:Id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.adminAuth,)

module.exports = router