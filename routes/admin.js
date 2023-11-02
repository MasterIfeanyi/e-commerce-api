const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/users/add',middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.addUser)

router.get('/users/list', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.listUser)

router.delete('/users/delete/:userId', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.adminRoleController.Admin.deleteUser )

router.post('/category/add',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.addCategory)

router.get('/category-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.listCategories)

router.patch('/category/update/:Id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.updateCategory)

router.delete('/category/delete/:Id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.deleteCategory)

module.exports = router