const { db } = require('../model/index')

class CategoryService {

    constructor(model){
        this.model = model

    }

    async createCategory(name){
        try{
            const result = await this.model.create({ name : name})
            return result
        }catch(err){
            throw err
        }

    }

    async listCategory(){
        try{
            const result = await this.model.findAll()
            return result

        }catch(err){
            throw err
        }
    }

    async updateCategory(name, id){
        try{
            const result = await this.model.update({ name : name, where : { id : id}})
            return result
        }catch(err){
            throw err
        }
    }

    async findAddToCategory(category, product){
        try{
            const result1 = await this.model.findOne({ where : { name : category }})
            const result2 =  await result1.addProduct(product)
            return result2
        }catch(err){
            throw err
        }
    }

    async listAllFromCategory(id){
        try{
            const result1 = await this.model.findAll({ where : { id : id }})
            const result2 = await result1.getProduct()
            return result2
        }catch(err){
            throw err
        }
    }

    async deleteCategory(id){
        try{
            const result = await this.model.delete({ where : { id : id}})
            return result
        }catch(err){
            throw err
        }
    }

}

module.exports = { CategoryService : new CategoryService(db.categoryModel.Category)}