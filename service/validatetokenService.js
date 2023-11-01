const model = require('../model/index')

class ValidateTokenService {
    constructor(model) {
        this.model = model
    }

    async createInvalidToken(accessToken) {
        try {
            const result = await this.model.create({ jwt_token: accessToken })
            return result
        } catch (err) {
            throw err
        }
    }

    async checkForInvalidToken(accessToken) {
        try {
            const result = await this.model.findOne({ where : { jwt_token: accessToken }})
            return result
        } catch (err) {
            throw err
        }
    }

}

module.exports = { ValidateTokenService : new ValidateTokenService(model.db.invalidtokenModel.InvalidToken)}