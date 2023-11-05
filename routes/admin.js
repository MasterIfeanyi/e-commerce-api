const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/admin/users', middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.addUser)

router.get('/admin/user-list', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.listUser)

router.delete('/admin/users/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.adminRoleController.Admin.deleteUser )

router.post('/admin/categories',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.addCategory)

router.get('/admin/categories/category-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.listCategories)

router.patch('/admin/categories/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.updateCategory)

router.delete('/admin/categories/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.deleteCategory)

module.exports = router