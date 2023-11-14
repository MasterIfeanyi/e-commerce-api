const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

/** 
 * @openapi
 * /api/users:
 *  post:
 *     tags:
 *     - User
 *     description: Create profile
 *     responses:
 *       200:
 *         description: profile successfully created
*/
router.post('/api/users', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.createProfile)
/** 
 * @openapi
 * /api/users/profile:
 *  get:
 *     tags:
 *     - User
 *     description: View profile
 *     responses:
 *       200:
 *         description: profile successfully retrieved
*/
router.get('/api/users/profile', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.getProfile)
/** 
 * @openapi
 * /api/users/update-profile:
 *  patch:
 *     tags:
 *     - User
 *     description: Update  profile
 *     responses:
 *       200:
 *         description: profile successfully updated
*/
router.patch('/api/users/update-profile', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.updateProfile )
/** 
 * @openapi
 * /api/users/account:
 *  delete:
 *     tags:
 *     - User
 *     description: Delete Account
 *     responses:
 *       200:
 *         description: account successfully deleted
*/
router.delete('/api/users/account', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.accountController.UserAccount.deleteAccount)



module.exports = router
