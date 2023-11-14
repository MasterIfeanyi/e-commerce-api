const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Catalog {

    static async productDetails(req, res) {
        try {
            const  productId  = req.params.id
            const product = await service.productService.findProducts(productId)
            if (!product) {
                return res.status(404).json(new ErrorResponse('product not found'))
            }
            return res.status(200).json(new SuccessResponse(' products successfully retrieved', product))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving products'))

        }
    }


}

module.exports = { Catalog }