"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = __importStar(require("../controllers/material.controllers"));
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
materialRouter.get("/", controller.getAllMaterials);
/**
 * @swagger
 * /materials/{id}:
 *    get:
 *      description: Get material by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Success
 */
materialRouter.get("/:id", controller.getMaterialById);
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
materialRouter.post("/", controller.createNewMaterial);
/**
 * @swagger
 * /materials/{id}:
 *   put:
 *     description: Update material by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - name: type
 *         in: formData
 *         required: false
 *         type: string
 *       - name: grade
 *         in: formData
 *         required: false
 *         type: string
 *       - name: thickness
 *         in: formData
 *         required: false
 *         type: string
 *       - name: weightPerSqFoot
 *         in: formData
 *         required: false
 *         type: string
 *       - name: tensileStrength
 *         in: formData
 *         required: false
 *         type: string
 *       - name: sheetWidth
 *         in: formData
 *         required: false
 *         type: string
 *       - name: sheetHeight
 *         in: formData
 *         required: false
 *         type: string
 *       - name: millProcess
 *         in: formData
 *         required: false
 *         type: string
 *       - name: pricePerSqFoot
 *         in: formData
 *         required: false
 *         type: string
 *     responses:
 *       204:
 *         description:
 */
materialRouter.put("/:id", controller.updateMaterialById);
/**
 * @swagger
 * /materials/{id}:
 *    delete:
 *      description: Delete material by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Success
 */
materialRouter.delete("/:id", controller.deleteMaterialById);
exports.default = materialRouter;
