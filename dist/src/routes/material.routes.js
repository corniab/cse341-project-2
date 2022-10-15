"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const material_controllers_1 = require("../controllers/material.controllers");
const materialRouter = express_1.default.Router();
// GET all materials
materialRouter.get("/", material_controllers_1.getAllMaterials);
// POST
materialRouter.post("/", material_controllers_1.createNewMaterial);
// PUT
// DELETE
exports.default = materialRouter;
