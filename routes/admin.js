const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/admin/users/add',middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.addUser)

router.get('/admin/users/list', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.listUser)

router.delete('/admin/users/delete/:userId', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.adminRoleController.Admin.deleteUser )

router.post('/admin/category/add',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.addCategory)

router.get('/admin/category/list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.listCategories)

router.patch('/admin/category/update/:Id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.updateCategory)

router.delete('/admin/category/delete/:Id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.deleteCategory)

module.exports = router