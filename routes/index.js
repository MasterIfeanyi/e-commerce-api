const express = require('express')
const router = express.Router()
/** 
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
*/
router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'API is running' })
})

module.exports = router