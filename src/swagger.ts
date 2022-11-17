import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sheet Metal API',
      description: 'This api provides information for a sheet metal shop.',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local development sever',
      },
      {
        url: 'https://project-2.onrender.com/api/v1',
        description: 'Main production server',
      },
    ],
    // components: {
    //   securitySchemas: {
    //     bearerAuth: {
    //       type: 'http',
    //       scheme: 'bearer',
    //     },
    //   },
    // },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(options);

export default swaggerDocs;
