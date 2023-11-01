const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')

class Storefront {

    static async findProduct() {
        const { productId } = req.params
        try {
            const getProduct = await service.productService.findProducts(productId)
            if (getProduct) {
                return res.status(200).json(new SuccessResponse(' products successfully retrieved', getProduct))
            }
            return res.status(400).json(new ErrorResponse('product not retrieved'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving products'))

        }
    }

    static async findProduct(id){
        try{
            const findProduct = null
            if(findProduct){
                return res.status(200).json(new SuccessResponse(' product successfully retrieved', findProduct))
            } 
            return res.status(400).json(new ErrorResponse('product not found'))
        }catch(err){
            console.log(err)
            return res.status(500).json(new ErrorResponse(' Error retrieving product'))
        }

    }


}

module.exports = { Storefront }