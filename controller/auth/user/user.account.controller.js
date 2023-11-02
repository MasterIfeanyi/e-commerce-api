const service = require('../../../service/index')
const { ErrorResponse, SuccessResponse } = require('../../../middleware/index')

class UserAccount {

    static async createProfile(req, res){
        const { firstname, lastname, phone} = req.body
        try{
            const addProfile = await service.profileService.createProfile(firstname, lastname, phone, req.id)
            if(addProfile){
                return res.status(200).json(new SuccessResponse('user profile successfully created', addProfile))
            }
           return res.status(404).json( new ErrorResponse('user profile not created'))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error creating user profile'))
          }
    }

    //retrieve Profile associated with the user
    static async getProfile(req, res){
        try{
            const viewProfile = await service.profileService.viewProfile(req.id)
            if(viewProfile){
                return res.status(200).json(new SuccessResponse('user profile successfully retrieved', viewProfile ))
            }
           return res.status(404).json( new ErrorResponse('user not found'))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error retrieving profile'))
          }
    }

    //Update Profile associated with the user
    static async updateProfile(req, res){
        const { firstname, lastname, phone,  email } = req.body
        try{
            const upadateUserProfile = await service.profileService.updateProfile(firstname, lastname, phone, req.id)
            const updateUser = await service.user.updateUser(email, req.id)
            if(upadateUserProfile || updateUser){
                return res.status(200).json(new SuccessResponse('user profile successfully updated'))
            }
           return res.status(400).json( new ErrorResponse('user profile not updated'))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error updating profile'))
          }

    }

    //Delete Account associated with the user
    static async deleteAccount(req, res){
        try{
            const deleteUserAcount = await service.profileService.updateProfile(firstname, lastname, phone, req.id)
            if(deleteUserAcount){
                return res.status(200).json(new SuccessResponse('user account successfully deleted', upadateUserProfile))
            }
           return res.status(400).json( new ErrorResponse('user account not deleted', ))
          }catch(err){
            console.log(err)
            return res.status(500).json( new ErrorResponse('Error deleting account'))
          }

    }
}

module.exports = { UserAccount }