const {  validationResult, body } = require('express-validator')

class Validation {

    static signupValidation = [
        body('username', 'username must not be empty').not().notEmpty(),
        body('email', 'email must not be empty').isEmail().not().notEmpty(),
        body('password', 'password must not be empty').not().notEmpty()
    ]

    static loginValidation = [
        body('username', 'username must not be empty').not().notEmpty(),
        body('password', 'password must not be empty').not().notEmpty()
    ]

    static refreshTokenValidation = [
        body('refreshtoken', 'refreshtoken must not be empty').not().notEmpty()
    ]

    static logoutValidation = [
        body('refreshToken', 'refreshToken must not be empty').not().notEmpty()
    ]

    static forgotPasswordValidation = [
        body('email', 'email must not be empty').isEmail().not().notEmpty()
    ]
    static resetPasswordValidation = [
        body('newPassword', 'newPassword must not be empty').not().notEmpty()
    ]

    static addProductValidation = [
        body('name', 'name must not be empty').not().notEmpty(),
        body('description', 'description must not be empty').not().notEmpty(),
        body('brand', 'brand must not be empty').not().notEmpty(),
        body('price', 'price must not be empty').not().notEmpty(),
        body('category', 'category must not be empty').not().notEmpty(),
        body('variant', 'variant must not be empty').not().notEmpty(),
        body('availability', 'availability must not be empty').not().notEmpty(),
    ]

    static validation (req, res, next) {
        const result = validationResult(req)

        if (!result.isEmpty()) {
            return res.status(400).json({ error: result.array() })
        }
        return next()
    }

}



module.exports = { Validation: Validation }