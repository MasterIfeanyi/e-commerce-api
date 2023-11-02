const { db } = require('../model/index')

class RatingService {

    constructor(model) {
        this.model = model
    }

    async createRating(rate, id) {
        try {
            const result = await this.model.create({ rate: rate, userId: id })
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

    async listReview() {
        try {
            const result = await this.model.findAll()
            return result
        } catch (err) {
            throw err

        }
    }

    async updateReview(rate, id) {
        try {
            const result = await this.model.update({ rate, where: { userId: id } })
            return result
        } catch (err) {
            throw err
        }
    }

    async deleteReview(id, userId) {
        try {
            const result = await this.model.destroy({ id: id, where: { userId: userId } })
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = { RatingService: new RatingService(db.ratingModel.Rating) }