const { db } = require('../model/index')


class ResetPasswordService {
    constructor(model) {
        this.model = model
    }

    async createResetToken(email, token, expireAt) {
        try {
            const result = await this.model.create({ email: email, token: token, expireAt: expireAt })
            return result
        } catch (err) {
            throw err
        }
    }
    async findResetToken(token) {
        try {
            const result = await this.model.findOne({ where:  token})
            return result
        } catch (err) {
            throw err
        }

    }
}
module.exports = { ResetPasswordService : new ResetPasswordService(db.passwordresettokenModel.PasswordResetToken)}