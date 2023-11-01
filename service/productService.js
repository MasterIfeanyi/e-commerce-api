const { Op, Sequelize } = require('sequelize')
const { db } = require('../model/index')
const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`, { logging: false })
require('dotenv').config()

class ProductService {

    constructor(model) {
        this.model = model
    }

    async createProduct(name, description, images, brand, price, category, variant, availability, id) {
        try {
            const result = await this.model.create({
                name: name, description: description, images: [images], brand: brand,
                price: price, category: category, variant: variant, availability: availability, userId: id
            })
            return result

        } catch (err) {
            throw err

        }
    }

    async listSellerProducts(id) {
        try {
            const result = await this.model.findAll({
                where: { userId: id }, attributes: [
                    'id', 'name', 'description', 'images', 'brand', 'price', 'category', 'variant', 'availability'
                ]
            })
            return result

        } catch (err) {
            throw err
        }
    }


    async findProducts(id) {
        try {
            const result = await this.model.findAll({ where: { id: id } })
            return result

        } catch (err) {
            throw err
        }
    }

    async listProducts() {
        try {
            const result = await this.model.findAll({ attributes: [sequelize.fn('array_length', sequelize.col('images'), 1), 'fisrtElement'] })
            return result

        } catch (err) {
            throw err
        }
    }

    async listProductFromCategories(category) {
        try {
            const result = await this.model.findAll({ where: { category: category } })
            return result
        } catch (err) {
            throw err
        }

    }

    async searchProduct(searchQuery) {
        try {
            const result = await this.model.findAll({ where: { name: { [Op.like]: `%${searchQuery}%` } }, attributes: ['id', 'name', 'images', 'price'] })
            return result
        } catch (err) {
            throw err
        }

    }

    async updateSellerProduct(productId, name, description, brand, price, category, variant, availability, id) {
        try {
            const result = await this.model.update({
                name, description, brand, price, category, variant, availability
            }, { where: { userId: id, id: productId } })
            return result

        } catch (err) {
            throw err
        }

    }


    async deleteSellerProduct(id, productId) {
        try {
            const deleteProduct = await this.model.delete({ where: { userId: id, productId: productId } })
            return deleteProduct
        } catch (err) {
            throw err
        }

    }

}

module.exports = { ProductService: new ProductService(db.productModel.Product) }