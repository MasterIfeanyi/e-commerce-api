const { storage } = require('../../config/cloudinary.config')
const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const cloudinary = require('cloudinary').v2
const service = require('../../service')
require('dotenv').config()


class Seller {

    //add product and associate it with a user who has a seller role
    static async addProduct(req, res) {
        try {
            const { name, description, brand, price, category, variant, availability } = req.body
            const images = req.files ? req.files : null
            if (images === null) {
                return res.status(400).json(new ErrorResponse('image field should not be empty!'))
            }
            const imageUrls = []
            for (let urls of images) {
                const uploadProductImages = await cloudinary.uploader.upload(urls.path, {
                    resource_type: 'auto'
                })
                imageUrls.push(uploadProductImages.secure_url)
            }
            const findCategory = await service.category.findCategory(category)
            if(findCategory){
                const newProduct = await service.productService.createProduct(name, description, imageUrls, brand, price, category, variant, availability, req.id)
                await service.category.findAddToCategory(category, newProduct)
                return res.status(201).json(new SuccessResponse(' succesfully added a product', newProduct))
            }else{
                 res.status(400).json(new ErrorResponse(' category does not exist '))   
            }
           
            return res.status(400).json(new ErrorResponse(' product was not added '))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error creating product'))

        }


    }

    //list all products associated with the user who has the seller
    static async listProducts(req, res) {
        try {
            const products = await service.productService.listSellerProducts(req.id)
            if (products.length!==0) {
                return res.status(200).json(new SuccessResponse('produtcs succesfully retrieved', products))
            }
            return res.status(200).json(new ErrorResponse('no product found', products))
        } catch (err) {
            console.log(err);
            return (res.status(500).json(new ErrorResponse('Error retrieving products')))
        }

    }


    //update a product associated with the user who has the seller role
    static async updateProduct(req, res) {
        const productId = req.params
        const { name, description, brand, price, category, variant, availability } = req.body
        try {
            const updateProductViaId = await service.productService.updateSellerProduct(productId, name, description, brand, price, category, variant, availability, req.id)
            if (updateProductViaId) {
                return res.status(200).json(new SuccessResponse('product was updated successfully', updateProductViaId))
            }
            return res.status(400).json(new ErrorResponse('product was not updated '))
        } catch (err) {
            return res.status(500).json(new ErrorResponse('Error updating Product'))
        }

    }


    //delete a product associated with the user who has the seller role
    static async deleteProduct(req, res) {
        const productId = req.params
        try {
            const deleteProductViaId = await service.productService.deleteSellerProduct(req.id, productId)
            if (deleteProductViaId) {
                return res.status(200).json(new SuccessResponse('product was successfully deleted'))
            }
            return res.status(400).json(new ErrorResponse(' product was not deleted'))

        } catch (err) {
            return res.status(500).json(new ErrorResponse('Error deleting product'))
        }

    }

}





module.exports = { Seller, storage }