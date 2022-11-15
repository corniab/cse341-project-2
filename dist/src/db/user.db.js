"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection_db_1 = __importDefault(require("./connection.db"));
const userSchema = new mongoose_1.Schema({
    identifer: String,
    email: String,
    givenName: String,
    familyName: String,
    locale: String,
    picture: String,
});
const User = connection_db_1.default.client.model('User', userSchema);
exports.default = User;
