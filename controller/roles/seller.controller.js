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
            const { name, description, brand, price, variant, availability, quantity, categoryId } = req.body
            const display_image = req.files.display_image ? req.files.display_image[0] : null
            const images = req.files.images ? req.files.images : null
            if (display_image===null && images === null) {
                return res.status(400).json(new ErrorResponse('image field should not be empty!'))
            }
            const uploadDisplayImage = await cloudinary.uploader.upload(display_image.path, {
                resource_type : 'auto'
            })
            const imageUrls = []
            for (let urls of images) {
                const uploadProductImages = await cloudinary.uploader.upload(urls.path, {
                    resource_type: 'auto'
                })
                imageUrls.push(uploadProductImages.secure_url)
            }
            const findCategory = await service.category.findCategory(categoryId)
            if (!findCategory) {
                res.status(404).json(new ErrorResponse('category not found '))
            } else {
                const newProduct = await service.productService.createProduct(name, description, uploadDisplayImage.secure_url , imageUrls, brand, price, variant, availability, quantity, req.id, categoryId)
                return res.status(201).json(new SuccessResponse(' succesfully added a product', newProduct))
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
            if (products.length === 0) {
                return res.status(400).json(new ErrorResponse('products was not retrieved', products))
            }
            return res.status(200).json(new SuccessResponse('produtcs succesfully retrieved', products))
        } catch (err) {
            console.log(err);
            return (res.status(500).json(new ErrorResponse('Error retrieving products')))
        }

    }


    //update a product associated with the user who has the seller role
    static async updateProduct(req, res) {
        try {
            const productId = req.params.id
            const { name, description, brand, price, category, variant, availability } = req.body
            const updateProductViaId = await service.productService.updateSellerProduct(productId, name, description, brand, price, category, variant, availability, req.id)
            if (!updateProductViaId) {
                return res.status(404).json(new ErrorResponse('product not found '))
            }
            return res.status(200).json(new SuccessResponse('product was updated successfully'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error updating Product'))
        }

    }


    //delete a product associated with the user who has the seller role
    static async deleteProduct(req, res) {
        try {
            const productId = req.params.id
            const product = await service.productService.deleteSellerProduct(req.id, productId)
            if (!product) {
                return res.status(404).json(new ErrorResponse('product not found'))
            }
            return res.status(200).json(new SuccessResponse('product was successfully deleted'))

        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Error deleting product'))
        }

    }

}





module.exports = { Seller, storage }