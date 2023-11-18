const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/payments', /* #swagger.tags = ['Payment'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.paymentController.Payment.makePayment)

router.post('/api/payments/flw/webhook', /* #swagger.tags = ['Payment'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.paymentController.Payment.paymentCallback)

module.exports = router