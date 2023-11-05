const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /users:
 *  post:
 *     tags:
 *     - User
 *     description: Create profile
 *     responses:
 *       200:
 *         description: profile successfully created
*/
router.post('/users', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.createProfile)
/** 
 * @openapi
 * /users/profile:
 *  get:
 *     tags:
 *     - User
 *     description: View profile
 *     responses:
 *       200:
 *         description: profile successfully retrieved
*/
router.get('/users/profile', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.getProfile)
/** 
 * @openapi
 * /users/update-profile:
 *  patch:
 *     tags:
 *     - User
 *     description: Update  profile
 *     responses:
 *       200:
 *         description: profile successfully updated
*/
router.patch('/users/update-profile', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.updateProfile )
/** 
 * @openapi
 * /users/account:
 *  delete:
 *     tags:
 *     - User
 *     description: Delete Account
 *     responses:
 *       200:
 *         description: account successfully deleted
*/
router.delete('/users/account', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.deleteAccount)



module.exports = router
