const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Storefront {

    static async listAllProducts(req, res) {
        try {
            const getallProducts = await service.productService.listProducts()
            if (!getallProducts) {
                return res.status(400).json(new ErrorResponse('product not retrieved'))
            }
            return res.status(200).json(new SuccessResponse('products successfully retrieved', getallProducts))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving products'))

        }
    }

    static async searchProduct(req, res) {
        const { searchQuery } = req.query
        try {
            const search = await service.productService.searchProduct(searchQuery)
            if (search.length !== 0) {
                return res.status(200).json(new SuccessResponse(' product successfully retrieved', search))
            }
            return res.status(400).json(new ErrorResponse('product not found'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving product'))
        }
    }


}

module.exports = { Storefront }