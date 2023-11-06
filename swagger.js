const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'Ecommerce-Api',
            description : 'This is an Ecommerce-Api ',
            version : '1.0.0',
        },
    },
  
    apis : ['./routes/*.js']
  }
var swaggerSpec = swaggerJsdoc(options)
module.exports = { options : options }