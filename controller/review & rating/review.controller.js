const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Review {

    static async addReview(req, res){
        const { name, title, content,  } = req.body
        try{
            const newReview = await service.reviewService.createReview(name, title, content, req.id)
            if(!newReview){
             return res.status(400).json(new ErrorResponse('review not created'))
            }
            return res.status(200).json(new SuccessResponse('review created succesfully', newReview))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error creating review'))

        }
    }

    static async findReview(req, res){
        const  Id  = req.params.Id
        try{
            const review = await service.reviewService.findReview(Id)
            if(!review){
                return res.status(400).json(new ErrorResponse('review not retrieved'))
            }
            return res.status(200).json(new SuccessResponse('review retrieved succesfully'))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error retrieving review'))

        }
    }

    static async listReviews(req, res){
        try{
            const listreviews = await service.reviewService.listReview()
            if(!listreviews){
                return res.status(400).json(new ErrorResponse('review not retrieved'))
            }
            return res.status(200).json(new SuccessResponse('reviews successfully retrieved', listreviews))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error retrieving review'))
        }
    }

    static async updateReviews(req, res){
        const { title, content,  } = req.body
        try{
            const listreviews = await service.reviewService.updateReview(title, content)
            if(!listreviews){
                return res.status(400).json(new ErrorResponse('review not updated'))  
            }
            return res.status(200).json(new SuccessResponse('reviews successfully updated', listreviews))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error updating review'))
        }
    }

    static async deleteReviews(req, res){
        const reviewId = req.params.id 
        try{
            const deleterView = await service.reviewService.deleteReview(reviewId, req.id)
            if(!deleterView){
                return res.status(400).json(new ErrorResponse('review not deleted')) 
            }
            return res.status(200).json(new SuccessResponse('review successfully deleted'))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error deleting review'))
        }
    }
}

module.exports = { Review }