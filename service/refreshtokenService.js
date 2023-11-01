const model = require('../model/index')
const config = require('../config/refreshtoken.config')
const { v4 : uuidv4} = require('uuid')


class RefreshToken {
    constructor(model) {
        this.model = model
    }

    async createRefreshToken(user) {
        const expiredAt = new Date()
        const token = uuidv4()
        expiredAt.setSeconds(expiredAt.getSeconds() + config.refreshTokenExpiration)

        try {
            const refreshToken = await this.model.create({
                id: user.id,
                token: token,
                expiryDate: expiredAt.getTime()
            })

            return refreshToken.token
        } catch (err) {
            throw err
        }
    }

    verifyRefreshTokenExpiration(token) {
        if(token && token.expiryDate){
        return token.expiryDate.getTime() < new Date().getTime()
        }
        return true
    }

    async findToken(refreshToken){
       try{
        const result = await this.model.findOne({ where : {  token : refreshToken}})
        return result

       }catch(err){
        throw err

       }
    }

    async deleteToken(refreshToken){
        try{
            const result = await this.model.destroy({ where : {  token: refreshToken}})
            return result

        }catch(err){
            throw err
        }
    }

}

module.exports = { RefreshToken : new RefreshToken(model.db.refreshTokenModel.RefreshToken)}