const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
     /* #swagger.tags = ['Base'] */  /* #swagger.security = [{
    "bearerAuth": []
}] */
    res.status(200).json({ message: 'API is running' })
})

module.exports = router