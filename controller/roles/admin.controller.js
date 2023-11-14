const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Admin {

    static async addUser(req, res) {
        try {
            const { username, email, role, password } = req.body
            const newUser = await service.user.createUser(username, email, password)
            if (!newUser)
                return res.status(400).json(new ErrorResponse('unable to add a new user'))
            if (role) {
                const roles = await service.role.findRole(role)
                roles && role.length > 0 ? newUser.setRoles(roles) : newUser.setRoles([1])
                return res.status(201).json(new SuccessResponse(' new user was successfully added', {
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
            if (!listUser) {
                return res.status(400).json(new ErrorResponse('users  not retrieved'))
            } 
              return res.status(200).json(new SuccessResponse('users succesfully retrieved', listUser))
        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse('Error retrieving user')))
        }

    }


    static async deleteUser(req, res) {
        try {
            const userId = req.params.id
            const deleteUser = service.user.deleteUser(userId)
            if (!deleteUser) {
                return res.status(404).json(new ErrorResponse('user not found'))
            }
            return res.status(200).json(new SuccessResponse(' user succesfully deleted'))

        } catch (err) {
            console.log(err)
            return (res.status(500).json(new ErrorResponse('Error deleting user')))
        }

    }

}

module.exports = { Admin }