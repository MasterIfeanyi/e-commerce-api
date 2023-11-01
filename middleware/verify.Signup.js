const { ErrorResponse } = require('./errorHandler')
const { db } = require('../model/index')
const service = require('../service/index')

class VerifySignUp {

    static async userSignUpverification(req, res, next) {
        const { username, email, role } = req.body
        try {
            const usernameCheck = await service.user.findUsername(username)
            if (usernameCheck) {
                return res.status(400).json(new ErrorResponse('username is already in use!'))
            }
            const emailCheck = await service.user.findEmail(email)
            if (emailCheck) {
                return res.status(400).json(new ErrorResponse('email is already in use!'))
            }
            for (let i = 0; i < role.length; i++) {
                if (!db.ROLE.includes(role[i])) {
                    return res.status(400).json(new ErrorResponse(`role ${role[i]} does not exist`))
                }
                break
            }
            next()

        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('user signup verification failed'))
        }

    }



}

// static async adminSignUpVerification(req, res, next){
//     const { username } = req.body
//     try{
//         const usernameCheck = await service.admin.AdminService.model.findOne({ where : { username : username}})
//         if(usernameCheck){
//             return res.status(400).json(new error.errorHandler('username is already in use!'))
//         }
//         next()
//     }catch(err){
//         console.log(err)
//         return res.status(500).json(new error.errorHandler('Internal Server Error'))
//     }

// }


module.exports = { VerifySignUp }