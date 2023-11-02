const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Catalog {

    static async productDetails(req, res) {
        const  productId  = req.params.productId
        try {
            const getProduct = await service.productService.findProducts(productId)
            if (!getProduct) {
                return res.status(400).json(new ErrorResponse('product not retrieved'))
            }
            return res.status(200).json(new SuccessResponse(' products successfully retrieved', getProduct))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving products'))

        }
    }


}

module.exports = { Catalog }