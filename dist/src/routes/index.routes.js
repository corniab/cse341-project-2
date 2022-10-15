"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_controllers_1 = require("../controllers/index.controllers");
const material_routes_1 = __importDefault(require("./material.routes"));
const router = express_1.default.Router();
// Root path
router.get("/", index_controllers_1.getHomePage);
// Materials router
router.use("/materials", material_routes_1.default);
exports.default = router;
