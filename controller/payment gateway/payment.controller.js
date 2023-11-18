require('dotenv').config()
const { SuccessResponse } = require('../../middleware/successHandler')
const { ErrorResponse } = require('../../middleware/errorHandler')
const service = require('../../service')
const { v4: uuidv4 } = require('uuid')

class Payment {

    static async makePayment(req, res) {
        try {
            const { default: got } = await import('got')
            const orderDetails = await service.orderService.findOrder(req.id)
            const customerDetails = await service.user.findUserById(req.id)
            const customerProfileDetails = await service.profileService.findProfile(req.id)
            const response = await got.post("https://api.flutterwave.com/v3/payments", {
                headers: {
                    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
                },
                json: {
                    tx_ref: uuidv4(),
                    amount: orderDetails.totalAmount,
                    currency: "NGN",
                    redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
                    meta: {
                        consumer_id: customerDetails.id,
                    },
                    customer: {
                        email: customerDetails.email,
                        phonenumber: customerProfileDetails.phone,
                        name: customerDetails.username
                    },
                    customizations: {
                        title: "Pied Piper Payments",
                        logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
                    }
                }
            }).json()
            if (!response) {
                return res.status(400).json(new ErrorResponse('Flutterwave redirect not succesfull'))
            }
            // return res.status(200).redirect(response.data.link)
            return res.status(200).json(new SuccessResponse(response))
        } catch (err) {
            console.log(err);
            return res.status(500).json(new ErrorResponse('Internal server error'))
        }


    }

    static async paymentCallback(req, res) {
        try {
            const secretHash = process.env.FLW_SECRET_HASH
            const signature = req.headers["verif-hash"]
            if(!signature || signature !== secretHash){
                //this request is not from flutterwave
                return res.status(401).json(new ErrorResponse('Request is not from flutterwave'))
            }
            const payload = req.body
            console.log(payload)
            if(payload.status !== 'successful'){
                return res.status(400).json(new ErrorResponse('Payment not succesfull'))
   
            }
            const orderDetails = await service.orderService.findOrder(req.id)
            await service.paymentService.createPayment(payload.data.amount, req.id, orderDetails.id)
            await service.cartService.deleteCart(null,req.id)
            // await service.productService.decreaseQuantity(, productId)
            return res.status(200).json(new SuccessResponse('Payment succesfull'))
        } catch (err) {
            console.log(err)
            return res.status(500).json(new ErrorResponse('Internal server error'))

        }
    }
}




module.exports = { Payment }