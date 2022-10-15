"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_db_1 = require("./src/db/connection.db");
// Create express app
const app = (0, express_1.default)();
// Specify port
const port = process.env.PORT || 3000;
// Initial route
app.get("/", (req, res) => {
    res.send("Hello World 😻");
});
// Connect database
connection_db_1.connection.init();
// Start server
app.listen(port, () => {
    console.log(`⚡️ [ server ] Server is running on port: ${port}`);
});
