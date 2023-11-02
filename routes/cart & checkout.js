const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')


router.post('/carts/add', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, middleware.sellerAuth )

router.post('/carts/remove/:productId')


module.exports = router