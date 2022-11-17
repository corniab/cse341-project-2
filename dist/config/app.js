"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Make environment variables available in application
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
exports.default = {
    port: process.env.PORT || '3000',
    dbUserName: process.env.DB_USERNAME || '',
    dbPassword: process.env.DB_PASSWORD || '',
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    redirectUrl: process.env.REDIRECT_URL || '',
    authorizationHost: process.env.AUTHORIZATION_HOST || '',
};
