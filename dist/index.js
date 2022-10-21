"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_db_1 = __importDefault(require("./src/db/connection.db"));
const index_routes_1 = __importDefault(require("./src/routes/index.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger"));
// Create express app
const app = (0, express_1.default)();
// Serve api docs
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// Specify port
const port = process.env.PORT || 3000;
// Include body parser
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Initial route
app.use("/", index_routes_1.default);
// Connect database
connection_db_1.default.init();
// Start server
app.listen(port, () => {
    console.log(`⚡️ [ server ] Server is running on port: ${port}`);
});
