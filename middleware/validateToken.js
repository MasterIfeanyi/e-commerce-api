const { ErrorResponse } = require('./errorHandler')
const service = require('../service/index')


class ValidateToken {

    static  async checkTokenBlackList(req, res, next){
        try{
            const accessToken  = req.headers.authorization
            if(!accessToken){
                return res.status(200).json( new ErrorResponse('access token is required')) 
            }
            const checkforIvailidToken = await service.validateService.checkForInvalidToken(accessToken)
            if(checkforIvailidToken){
                return res.status(200).json( new ErrorResponse('access token is invalid'))
            }
            next()
        }catch(err){
            console.log('Error checking token Blacklist', err)
            return res.status(500).json( new ErrorResponse('Internal Server Error'))

        }
    
    }

}

module.exports = { ValidateToken }