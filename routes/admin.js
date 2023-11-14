const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /api/admin/users:
 *  post:
 *     tags:
 *     - Admin
 *     description: Add user
 *     responses:
 *       201:
 *         description:  new user was successfully added 
  *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  username:
 *                    type: string
 *                  email:
 *                    type: string
 *                  password:
 *                   type: string
 *       400:
 *         description: Unable to add a new user
*/
router.post('/api/admin/users', middleware.verifySignUp.userSignUpverification, middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.addUser)
/** 
 * @openapi
 * /api/admin/users/user-list:
 *  get:
 *     tags:
 *     - Admin
 *     description: List all users
 *     responses:
 *       200:
 *         description:   users succesfully retrieved 
*/
router.get('/api/admin/users/user-list', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.adminRoleController.Admin.listUser)
/** 
 * @openapi
 * /api/admin/users/:id:
 *  delete:
 *     tags:
 *     - Admin
 *     description: Delete a user
 *     responses:
 *       200:
 *         description:  user succesfully deleted
*/
router.delete('/api/admin/users/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.adminRoleController.Admin.deleteUser )
/** 
 * @openapi
 * /api/admin/categories:
 *  post:
 *     tags:
 *     - Admin
 *     description: Create a category
 *     responses:
 *       200:
 *         description: category successfully created
*/
router.post('/api/admin/categories',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.addCategory)
/** 
 * @openapi
 * /admin/categories/category-list:
 *  get:
 *     tags:
 *     - Admin
 *     description: Get the list of all category
 *     responses:
 *       200:
 *         description: category successfully retrieved
*/
router.get('/api/admin/categories/list-category',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.listCategories)
/** 
 * @openapi
 * /api/admin/categories/:id:
 *  patch:
 *     tags:
 *     - Admin
 *     description: Update a Category
 *     responses:
 *       200:
 *         description: category successfully updated
*/
router.patch('/api/admin/categories/:id', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.updateCategory)
/** 
 * @openapi
 * /api/admin/categories/:id:
 *  delete:
 *     tags:
 *     - Admin
 *     description: Delete a Category
 *     responses:
 *       200:
 *         description: category successfully deleted
*/
router.delete('/api/admin/categories/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.categoryController.Category.deleteCategory)
module.exports = router