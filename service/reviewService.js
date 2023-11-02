const { db } = require('../model/index')

class ReviewService {

    constructor(model) {
        this.model = model
    }

    async createReview(name, title, content, id) {
        try {
            const result = await this.model.create({ name: name, title: title, content: content, userId: id })
            return result
        } catch (err) {
            throw err

        }
    }

    async findReview(id) {
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

    async updateReview(title, content, id) {
        try {
            const result = await this.model.update({ name, title, content, where: { userId: id } })
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

module.exports = { ReviewService : new ReviewService(db.reviewModel.Review) }