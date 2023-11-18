const express = require('express')
const router = express.Router()
const controller = require('../controller/index')
const middleware = require('../middleware/index')

router.post('/api/reviews',   /* #swagger.tags = ['Review'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.addReview )

router.get('/api/reviews/list-review',    /* #swagger.tags = ['Review'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.listReviews )

router.get('/api/reviews/:id',    /* #swagger.tags = ['Review'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.reviewController.Review.findReview)

router.patch('/api/reviews/update-review/:id',    /* #swagger.tags = ['Review'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.updateReview)

router.delete('/api/reviews/delete-review/:id',    /* #swagger.tags = ['Review'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.reviewController.Review.deleteReview)


router.post('/api/ratings',    /* #swagger.tags = ['Rating'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.addRating)

router.get('/api/ratings/list-rating',/* #swagger.tags = ['Rating'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.listRatings)

router.get('/api/ratings/:id', /* #swagger.tags = ['Rating'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted,  controller.ratingController.Rating.findRating)

router.patch('/api/ratings/update-rating/:id', /* #swagger.tags = ['Rating'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */ middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.updateRating)

router.delete('/api/ratings/delete-rating/:id', /* #swagger.tags = ['Rating'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */  middleware.userTokenVerification, middleware.checkIfTokenIsBlaclisted, controller.ratingController.Rating.deleteRating)



module.exports = router
