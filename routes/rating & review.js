const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

//review routes
router.post('/review/add')

router.get('/review-list')

router.get('/reviews/:reviewId')

router.patch('/reviews/update/:reviewId')

router.delete('/review/delet/:reviewId')

//rating routes
router.post('/ratings/add')

router.get('/ratings/list')

router.get('/ratings/:rateId')

router.patch('/ratings/update/:rateId')

router.delete('/ratings/delete/:rateId')



module.exports = router
