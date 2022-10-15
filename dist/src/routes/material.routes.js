"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const material_controllers_1 = require("../controllers/material.controllers");
const materialRouter = express_1.default.Router();
/**
 * @swagger
 * /materials:
 *    get:
 *      description: Get all materials
 *      responses:
 *        200:
 *          description: Success
 */
materialRouter.get("/", material_controllers_1.getAllMaterials);
/**
 * @swagger
 * /materials:
 *    post:
 *      description: Create a new material
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: type
 *          in: formData
 *          required: true
 *          type: string
 *        - name: grade
 *          in: formData
 *          required: true
 *          type: string
 *        - name: thickness
 *          in: formData
 *          required: true
 *          type: string
 *        - name: weightPerSqFoot
 *          in: formData
 *          required: true
 *          type: string
 *        - name: tensileStrength
 *          in: formData
 *          required: true
 *          type: string
 *        - name: sheetWidth
 *          in: formData
 *          required: true
 *          type: string
 *        - name: sheetHeight
 *          in: formData
 *          required: true
 *          type: string
 *        - name: millProcess
 *          in: formData
 *          required: true
 *          type: string
 *        - name: pricePerSqFoot
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *        201:
 *          description: Created
 */
materialRouter.post("/", material_controllers_1.createNewMaterial);
// PUT
// DELETE
exports.default = materialRouter;
