const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version: '3.0.0',            // by default: '1.0.0'
    title: 'E-commerce API',              // by default: 'REST API'
    description: 'This is an E-commerce API'         // by default: ''
  },
  servers: [
    {
      url: 'http://localhost:3000/',              // by default: 'http://localhost:3000'
      description: 'Live url'       // by default: ''
    },
    // { ... }
  ],
  tags: [                   // by default: empty Array
    {
      name: 'Authentication',             // Tag name      
    },

    {
        name : 'User'
    },

    {
        name : 'Admin'
    },

    {
        name : 'Storefront'
    },

    {
        name : 'Seller'
    },

    {
        name : 'Rating'
    },

    {
        name : 'Review'
    },

    {
        name : 'Payment'
    },

    {
        name : 'Checkout'
    },

    {
        name : 'Cart'
    },

    {
        name : 'Base'
    }

  ],
  components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        },

        schemas: {
            Registration: {
                $username: 'Emmanuel',
                $email: 'emmanuel09@gmail.com',
                $password: '777ddfd009dopdj',
                $role : ["seller"],
            },

            Login: {
                $username: 'Emmanuel',
                $password: '777ddfd009dopdj',
            },

            Refreshtoken: {
                $refreshtoken : "886shsgsgsiow00wjwwn"
            }
  } 
           }           // by default: empty object
};

const outputFile = './swagger-output.json';
const routes =  ['./routes/*.js']

swaggerAutogen(outputFile, routes, doc)