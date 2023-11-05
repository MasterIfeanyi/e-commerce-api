const { db } = require('../model/index')

class RatingService {

    constructor(model) {
        this.model = model
    }

    async createRating(rating, id) {
        try {
            const result = await this.model.create({ rating: rating, userId: id })
            return result
        } catch (err) {
            throw err

        }
    }

    async findRating(id) {
        try {
            const result = await this.model.findOne({ where: { id: id } })
            return result
        } catch (err) {
            throw err
        }
    }

    async listRatings() {
        try {
            const result = await this.model.findAll()
            return result
        } catch (err) {
            throw err

        }
    }

    async updateRating(rating, ratingId, userId) {
        try {
            const result = await this.model.update({ rating : rating}, {where: { id : ratingId, userId: userId } })
            return result
        } catch (err) {
            throw err
        }
    }

    async deleteRating(id, userId) {
        try {
            const result = await this.model.destroy({where: { id : id, userId: userId } })
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = { RatingService: new RatingService(db.ratingModel.Rating) }