const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Rating {

    static async addRating(req, res){
        const { rating } = req.body
        try{
            const newRating = await service.ratingService.createRating(rating, req.id)
            if(!newRating){
                return res.status(400).json(new ErrorResponse('rating not created'))
            }
            return res.status(200).json(new SuccessResponse('rating successfully created ', newRating))
        }catch(err){
            return res.status(500).json(new ErrorResponse('Error creating rating'))
        }
    }

    static async findRating(req, res){
        const  ratingId = req.params.id
        try{
            const rating = await service.ratingService.findRating(ratingId)
            if(!rating){
                return res.status(404).json(new ErrorResponse('rating not found')) 
            }
            return res.status(200).json(new SuccessResponse('rating successfully found', rating))
        }catch(err){
            return res.status(500).json(new ErrorResponse('Error finding rating '))
        }
    }

    static async listRatings(req, res){
        try{
            const ratings = await service.ratingService.listRatings()
            if(!ratings){
                return res.status(400).json(new ErrorResponse('no ratings retrieved'))   
            }
            return res.status(200).json(new SuccessResponse('ratings successfully retrieved', ratings))
        }catch(err){
            return res.status(500).json(new ErrorResponse('Error retrieving rating '))
        }
    }
   
    static async updateRating(req, res){
        const ratingId = req.params.id
        const { rating } = req.body
        try{
            const rate = await service.ratingService.updateRating(rating, ratingId, req.id)
            if(!rate){
                return res.status(404).json(new ErrorResponse('rating not found'))   
            }
            return res.status(200).json(new SuccessResponse('rating successfully updated')) 
        }catch(err){
            console.log(err)
            return res.status(500).json(new SuccessResponse('Error updating rating '))
        }

    }


    static async deleteRating(req, res){
        const ratingId = req.params.id
        try{
            const rating = await service.ratingService.deleteRating(ratingId, req.id)
            if(!rating){
                return res.status(400).json(new ErrorResponse('rating not found'))   
            }
            return res.status(200).json(new SuccessResponse('rating successfully deleted'))
        }catch(err){
            console.log(err)
            return res.status(500).json(new SuccessResponse('Error deleting rating'))
        }
    }
}

module.exports = { Rating }