"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_db_1 = __importDefault(require("./db/connection.db"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app_1 = __importDefault(require("./config/app"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger"));
const path_1 = __importDefault(require("path"));
// Create express app
const app = (0, express_1.default)();
// Server static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Serve api docs
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// Include body parser
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// API route
app.use('/api/v1/', index_routes_1.default);
// Connect database
connection_db_1.default.init();
// Start server
app.listen(app_1.default.port, () => {
    console.log(`⚡️ [ server ] Server is running on port: ${app_1.default.port}`);
});
