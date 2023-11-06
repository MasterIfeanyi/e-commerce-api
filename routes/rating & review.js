const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

//review routes

/** 
 * @openapi
 * /reviews:
 *  post:
 *     tags:
 *     - Review
 *     description: Add a review
 *     responses:
 *       200:
 *         description: review successfully added
*/
router.post('/reviews', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.addReview )
/** 
 * @openapi
 * /reviews/review-list:
 *  get:
 *     tags:
 *     - Review
 *     description: Get list of reviews
 *     responses:
 *       200:
 *         description: reviews succsessfully retrieved
*/
router.get('/reviews/review-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.listReviews )
/** 
 * @openapi
 * /reviews/:id:
 *  get:
 *     tags:
 *     - Review
 *     description: Get a review
 *     responses:
 *       200:
 *         description: review successfully retrieved
*/
router.get('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.reviewController.Review.findReview)
/** 
 * @openapi
 * /reviews/:id:
 *  patch:
 *     tags:
 *     - Review
 *     description: Update a review
 *     responses:
 *       200:
 *         description: review successfully updated
*/
router.patch('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.updateReview)
/** 
 * @openapi
 * /reviews/:id:
 *  delete:
 *     tags:
 *     - Review
 *     description: delete a review
 *     responses:
 *       200:
 *         description: review successfully deleted
*/
router.delete('/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.deleteReview)


//rating routes

/** 
 * @openapi
 * /ratings:
 *  post:
 *     tags:
 *     - Rating
 *     description: Add a rating
 *     responses:
 *       201:
 *         description: rating successfully added
*/
router.post('/ratings',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.addRating)
/** 
 * @openapi
 * /ratings/rating-list:
 *  get:
 *     tags:
 *     - Rating
 *     description: Get product list
 *     responses:
 *       200:
 *         description: rating successfully retrieved
*/
router.get('/ratings/rating-list',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.listRatings)
/** 
 * @openapi
 * /ratings/:id:
 *  get:
 *     tags:
 *     - Rating
 *     description: Get a rating
 *     responses:
 *       200:
 *         description: rating successfully added
*/
router.get('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.ratingController.Rating.findRating)
/** 
 * @openapi
 * /ratings/:id:
 *  patch:
 *     tags:
 *     - Rating
 *     description: update a rating
 *     responses:
 *       200:
 *         description: rating successfully updated
*/
router.patch('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.updateRating)
/** 
 * @openapi
 * /seller/product:
 *  delete:
 *     tags:
 *     - Rating
 *     description: Delete a rating
 *     responses:
 *       200:
 *         description: rating successfully deleted
*/
router.delete('/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.deleteRating)



module.exports = router
