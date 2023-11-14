const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/checkouts', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.checkoutController.Checkout.createCheckout)

module.exports = router