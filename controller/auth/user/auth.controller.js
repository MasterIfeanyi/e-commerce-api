const service = require('../../../service/index')
const { passwordResetEmail } = require('../../../config/mailer')
const { ErrorResponse, SuccessResponse } = require('../../../middleware/index')
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt')
const { v4: uuid } = require('uuid')

class UserAuth {

    static async registration(req, res) {
        try {
            const { username, email, role, password } = req.body
            const newUser = await service.user.createUser(username, email, password)
            if (!newUser)
                return res.status(400).json(new ErrorResponse('user registration was not succesfull'))
            if (role) {
                const roles = await service.role.findRole(role)
                roles && role.length > 0 ? newUser.setRoles(roles) : newUser.setRoles([1])
                return res.status(201).json(new SuccessResponse('user registration succesfull', {
                    userId: newUser.id, username: newUser.username, email: newUser.email
                }))
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('User registration Failed'))

        }
    }


    static async login(req, res) {
        try {
            const { username, password } = req.body
            const findUser = await service.user.findUsername(username)
            if (!findUser)
                return res.status(400).json(new ErrorResponse('incorrect username'))
            const userRole = []
            const role = await findUser.getRoles()
            if (role === null)
                return res.status(400).json(new ErrorResponse('incorrect username'))
            for (let i = 0; i < role.length; i++) {
                userRole.push(role[i].name.toUpperCase())
            }

            const passwordMatch = bycrypt.compareSync(password, findUser.password.toString())
            if (!passwordMatch) {
                return res.status(401).json(new ErrorResponse('incorrect password'))
            }
            const generateJwt = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET, { expiresIn: '1h', algorithm: "HS256" })
            const refreshToken = await service.refreshTokenService.createRefreshToken(findUser)
            return res.status(200).json(new SuccessResponse('login successfull', {
                id: findUser.id, username: findUser.username, role: userRole, accessTokenExpiresIn: '1h', accessToken: generateJwt,
                refreshToken: refreshToken
            }))
        } catch (err) {
            console.log('error Logging in user ', err)
            return res.status(500).json(new ErrorResponse('Login failed'))
        }

    }



    static async refreshAndVerifyToken(req, res) {
        try {
            const { refreshtoken } = req.body
            const findToken = await service.refreshTokenService.findToken(refreshtoken)
            if (!findToken)
                return res.status(404).json(new ErrorResponse("refreshToken does not exist"))
            if (service.refreshTokenService.verifyRefreshTokenExpiration(findToken)) {
                await service.refreshTokenService.deleteToken(refreshtoken)
                return res.status(400).json(new ErrorResponse("request Token has Expired please make a new signin request"))
            }
            const generateNewAccessToken = jwt.sign({ id: findToken.id }, process.env.JWT_SECRET, { expiresIn: '1h', algorithm: "HS256" })
            return res.status(200).json(new SuccessResponse({ accessTokenExpiresIn: '1h', AccessToken: generateNewAccessToken, RefreshToken: findToken.token }))

        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse("Refresh Token verification failed")))

        }

    }

    static async forgotPassword(req, res) {
        try {
            const { email } = req.body
            const findUerEmail = await service.user.findEmail(email)
            if (!findUerEmail) {
                return res.status(404).json(new ErrorResponse("email does not exist!"))
            }
            const token = uuid()
            const tokenExpiration = Date.now() + 3600000 //1 hour expirationTime
            const createResetToken = service.resetPassword.ResetPasswordService.createResetToken(email, token, tokenExpiration)
            if (!createResetToken) {
                return res.status(400).json(new SuccessResponse('reset email was not sent'))
            }
            passwordResetEmail(email, token)
            return res.status(200).json(new SuccessResponse('reset email was succesfully sent '))
        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse("refresh Token verification failed")))
        }

    }

    static async resetPassword(req, res) {
        try {
            const token = req.params
            const { newPassword } = req.body
            const checkForTokenExistence = await service.resetPassword.ResetPasswordService.findResetToken(token)
            if (checkForTokenExistence.expireAt < Date.now()) {
                return res.status(400).json(new ErrorResponse('expired Token '))
            }
            const updatePassword = await service.user.updatePassword(newPassword, checkForTokenExistence.email)
            if (!updatePassword) {
                return res.status(400).json(new ErrorResponse('password update was not successfull'))
            }
            return res.status(200).json(new SuccessResponse('password update was successfull'))
        } catch (err) {
            console.log("Error reseting password", err.stack)
            return res.status(500).json(new ErrorResponse("Password update failed"))
        }

    }

    static async logout(req, res) {
        try {
            const accessToken = req.headers.authorization
            const { refreshToken } = req.body
            const createInvalidToken = await service.validateService.createInvalidToken(accessToken)
            const deleteRefreshToken = await service.refreshTokenService.deleteToken(refreshToken)
            if (!createInvalidToken && !deleteRefreshToken) {
                return res.status(400).json(new ErrorResponse(' logout was not succesfull'))
            }
            return res.status(200).json(new SuccessResponse(' logout was succesfull'))
          
        } catch (err) {
            console.log(" Error loggin out User ", err)
            return (res.status(500).json(new ErrorResponse("User logout failed")))

        }

    }
}

module.exports = { UserAuth }
