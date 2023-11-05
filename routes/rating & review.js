const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

//review routes
router.post('/reviews', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.addReview )

router.get('/reviews/review-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.listReviews )

router.get('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.reviewController.Review.findReview)

router.patch('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.updateReview)

router.delete('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.deleteReview)


//rating routes
router.post('/ratings',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.addRating)

router.get('/ratings/rating-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.listRatings)

router.get('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.ratingController.Rating.findRating)

router.patch('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.updateRating)

router.delete('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.deleteRating)



module.exports = router
