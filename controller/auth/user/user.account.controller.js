const service = require('../../../service/index')
const { ErrorResponse, SuccessResponse } = require('../../../middleware/index')

class UserAccount {

    static async createProfile(req, res){
        const { firstname, lastname, phone} = req.body
        try{
            const newProfile = await service.profileService.createProfile(firstname, lastname, phone, req.id)
            if(!newProfile){
                return res.status(400).json( new ErrorResponse('user profile not created'))
            }
            return res.status(200).json(new SuccessResponse('user profile successfully created', newProfile))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error creating user profile'))
          }
    }

    //retrieve Profile associated with the user
    static async getProfile(req, res){
        try{
            const profile = await service.profileService.viewProfile(req.id)
            if(!profile){
                return res.status(404).json( new ErrorResponse('user not found'))
            }
            return res.status(200).json(new SuccessResponse('user profile successfully retrieved', profile ))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error retrieving profile'))
          }
    }

    //Update Profile associated with the user
    static async updateProfile(req, res){
        const { firstname, lastname, phone,  email } = req.body
        try{
            const profile = await service.profileService.updateProfile(firstname, lastname, phone, req.id)
            const updateUser = await service.user.updateUser(email, req.id)
            if(!profile || !updateUser){
                return res.status(400).json( new ErrorResponse('user profile not updated'))
            }
            return res.status(200).json(new SuccessResponse('user profile successfully updated'))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error updating profile'))
          }

    }

    //Delete Account associated with the user
    static async deleteAccount(req, res){
        try{
            const profile = await service.profileService.updateProfile(firstname, lastname, phone, req.id)
            if(!deleteUserAcount){
                return res.status(400).json( new ErrorResponse('user account not deleted', ))
            }
            return res.status(200).json(new SuccessResponse('user account successfully deleted', profile))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error deleting account'))
          }

    }
}

module.exports = { UserAccount }