const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'week2', 
            version: '1.0.0',        
            description: 'API documentation for my week2 API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./index.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
