
const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'Ecommerce-Api',
            description : 'This is an Ecommerce-Api ',
            version : '1.0.0',
        }
    },

    apis : ['./routes*.js']
}

module.exports = { options : options }