const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({ message : 'E-commerce API is running'})
})

module.exports = router