const { db } = require('../model/index')

class UserProfileService {
    constructor(model) {
        this.model = model
    }

    async createProfile( firstname, lastname,  phone , id){
        try {
            const result = await this.model.create({ firstname: firstname, lastname: lastname, phone: phone , userId : id})
            return result
        } catch (err) {
            throw err
        } 
    }

    async findProfile(userId){
        try{
            const result = await this.model.findOne({ where : { userId : userId }})
            return result
        }catch(err){
            throw err
        }
    }

    async viewProfile(id){
        try {
            const result = await this.model.findAll({ where : { userId : id}, include : [{ model: db.userModel.User, attributes : ['username', 'email']}], attributes : ['firstname','lastname','phone']})
            return result
        } catch (err) {
            throw err
        } 
    }

    async updateProfile(firstname, lastname,  phone , id) {
        try {
            const result = await this.model.update({ firstname: firstname, lastname: lastname, phone: phone }, { where: { userId: id } })

            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = { UserProfileService : new UserProfileService(db.profileModel.Profile) }