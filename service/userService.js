const { db } = require('../model/index')
const bycrypt = require('bcrypt')

class User {
    constructor(model){
        this.model = model
    }
     async createUser (username, email, password){
        //create a User
        try {
            const result =  await this.model.create({ username: username, email: email, password: bycrypt.hashSync(password, 8) })
            return result
        } catch (err) {
            throw err
        }
    }
    
    async findUsername (username){
        //find Username
        try {
            const result = await this.model.findOne({ where: { username: username } })
            return result
        } catch (err) {
            throw err
        }
    }

    async findEmail (email){
        //find Username
        try {
            const result = await this.model.findOne({ where: { email: email } })
            return result
        } catch (err) {
            throw err
        }
    }

    async findUserById (id){
        try{
            const result = await this.model.findByPk(id)
            return result
        }catch(err){
            throw err
        }
    }

    async updatePassword(password, email){
        try{
            const result = await this.model.update({ password : bycrypt.hashSync(password, 8)},{ where : { email : email}})
            return result
        }catch(err){
            throw err
        }
    }

    async updatePassWithID(id, password){
        try{

        }catch(err){

        }

    }

    async getAllUser(){
        try{
            const result = await this.model.findAll({ attributes : ['id','username', 'email']},{ inclue : db.profileModel.Profile})
            return result
        }catch(err){
            throw err
        }
    }

    async updateUser(email, id){
        try{
            const result = await this.model.update({email : email }, { where : {id : id}})
            return result
        }catch(err){
            throw err

        }
    }

    async deleteUser(id){
        try{
            const result = await this.model.destroy({ where : { id : id}})
            return result
        }catch(err){
            throw err
        }
    }




}


module.exports = { User : new User(db.userModel.User)}