const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/payments', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.paymentController.Payment.makePayment)

router.post('/api/payments/flw/webhook',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.paymentController.Payment.paymentCallback)

module.exports = router