const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')



/** 
 * @openapi
 * /api/reviews:
 *  post:
 *     tags:
 *     - Review
 *     description: Add a review
 *     responses:
 *       200:
 *         description: review successfully added
*/
router.post('/api/reviews', middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.addReview )
/** 
 * @openapi
 * /api/reviews/review-list:
 *  get:
 *     tags:
 *     - Review
 *     description: Get list of reviews
 *     responses:
 *       200:
 *         description: reviews succsessfully retrieved
*/
router.get('/api/reviews/list-review',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.listReviews )
/** 
 * @openapi
 * /api/reviews/:id:
 *  get:
 *     tags:
 *     - Review
 *     description: Get a review
 *     responses:
 *       200:
 *         description: review successfully retrieved
*/
router.get('/api/reviews/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.reviewController.Review.findReview)
/** 
 * @openapi
 * /api/reviews/update-review/:id:
 *  patch:
 *     tags:
 *     - Review
 *     description: Update a review
 *     responses:
 *       200:
 *         description: review successfully updated
*/
router.patch('/api/reviews/update-review/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.updateReview)
/** 
 * @openapi
 * /api/reviews/delete-review/:id:
 *  delete:
 *     tags:
 *     - Review
 *     description: delete a review
 *     responses:
 *       200:
 *         description: review successfully deleted
*/
router.delete('/api/reviews/delete-review/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.deleteReview)


//rating routes

/** 
 * @openapi
 * /api/ratings:
 *  post:
 *     tags:
 *     - Rating
 *     description: Add a rating
 *     responses:
 *       201:
 *         description: rating successfully added
*/
router.post('/api/ratings',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.addRating)
/** 
 * @openapi
 * /api/ratings/list-rating:
 *  get:
 *     tags:
 *     - Rating
 *     description: Get product list
 *     responses:
 *       200:
 *         description: rating successfully retrieved
*/
router.get('/api/ratings/list-rating',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.listRatings)
/** 
 * @openapi
 * /api/ratings/:id:
 *  get:
 *     tags:
 *     - Rating
 *     description: Get a rating
 *     responses:
 *       200:
 *         description: rating successfully added
*/
router.get('/api/ratings/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.ratingController.Rating.findRating)
/** 
 * @openapi
 * /api/ratings/update-rating/:id:
 *  patch:
 *     tags:
 *     - Rating
 *     description: update a rating
 *     responses:
 *       200:
 *         description: rating successfully updated
*/
router.patch('/api/ratings/update-rating/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.updateRating)
/** 
 * @openapi
 * /api/ratings/delete-rating/:id:
 *  delete:
 *     tags:
 *     - Rating
 *     description: Delete a rating
 *     responses:
 *       200:
 *         description: rating successfully deleted
*/
router.delete('/api/ratings/delete-rating/:id',  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.deleteRating)



module.exports = router
