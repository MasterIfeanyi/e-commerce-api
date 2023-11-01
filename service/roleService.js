const { Op } = require("sequelize")
const model = require('../model/index')

class RoleService {

    constructor(model){
        this.model = model
    }

    async findRole(userRole){
        try{
            const result = await this.model.findAll({ where : { name : { [Op.or] : userRole} }})
            return  result 

        }catch(err){
            throw err
        }
    }
}

module.exports = { RoleService : new RoleService(model.db.roleModel.Role)}