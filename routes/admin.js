const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/admin/users', /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.addUser)

router.get('/api/admin/users/user-list',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.listUser)

router.delete('/api/admin/users/:id',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.adminRoleController.Admin.deleteUser )

router.post('/api/admin/categories',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.addCategory)

router.get('/api/admin/categories/list-category',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.listCategories)

router.patch('/api/admin/categories/:id',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.updateCategory)

router.delete('/api/admin/categories/:id',  /* #swagger.tags = ['Admin'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.deleteCategory)

module.exports = router