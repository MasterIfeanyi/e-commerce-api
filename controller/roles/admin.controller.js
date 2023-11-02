const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Admin {

    static async addUser(req, res) {
        const { username, email, role, password } = req.body
        try {
            const newUser = await service.user.createUser(username, email, password)
            if (!newUser)
                return res.status(401).json(new ErrorResponse('uanble to add a new user'))
            if (role) {
                const roles = await service.role.findRole(role)
                roles && role.length > 0 ? newUser.setRoles(roles) : newUser.setRoles([1])
                return res.status(201).json(new SuccessResponse(' new User was successfully added', {
                    userId: newUser.id, username: newUser.username, email: newUser.email
                }))
            }
        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse('Error adding new user')))

        }
    }


    static async listUser(req, res) {
        try {
            const listUser = await service.user.getAllUser()
            if (!listUser.user) {
                return res.status(200).json(new SuccessResponse(' users with no profile succesfully retrieved', listUser))
            } else {
                res.status(200).json(new SuccessResponse(' users with profle succesfully retrieved', listUser))
            }
            return res.status(400).json(new ErrorResponse('users  not retrieved'))

        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse('Error retrieving user')))
        }

    }


    static async deleteUser(req, res) {
        const userId = req.params.userId
        try {
            const deleteUser = service.user.deleteUser(userId)
            if (!deleteUser) {
                return res.status(400).json(new ErrorResponse('user  not deleted'))
            }
            return res.status(200).json(new SuccessResponse(' user was succesfully deleted'))

        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse('Error deleting user')))
        }

    }

}

module.exports = { Admin }