"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerDocs;
