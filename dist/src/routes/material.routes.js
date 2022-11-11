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
const validation = __importStar(require("../validation/validation"));
const materialRouter = express_1.default.Router();
/**
 * @openapi
 * components:
 *  schemas:
 *    Material:
 *      type: object
 *      properties:
 *        type:
 *          type: string
 *          description: Description of material
 *        grade:
 *          type: string
 *          description: Material grade, e.g. A36
 *        thickness:
 *          type: string
 *          description: Thickness of material in inches
 *        weightPerSqFoot:
 *          type: string
 *          description: Weight of material in pounds per square foot
 *        tensileStrength:
 *          type: string
 *          description: Tensile strength of material
 *        sheetWidth:
 *          type: string
 *          description: Width of sheet material in feet
 *        sheetHeight:
 *          type: string
 *          description: Height of sheet material in feet
 *        millProcess:
 *          type: string
 *          description: Description of production process
 */
/**
 * @openapi
 * tags:
 *  name: Materials
 *  description: API to manage sheet metal inventory
 */
/**
 * @openapi
 * /materials:
 *  get:
 *    tags:
 *      - Materials
 *    description: Get all materials
 *    responses:
 *      200:
 *        description: Success
 */
materialRouter.get('/', controller.getAllMaterials);
/**
 * @openapi
 * /materials/{id}:
 *  get:
 *    tags:
 *      - Materials
 *    description: Get material by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 */
materialRouter.get('/:id', validation.queryParamsValidation, controller.getMaterialById);
/**
 * @openapi
 * /materials:
 *  post:
 *    tags:
 *      - Materials
 *    description: Create a new material
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: type
 *        in: formData
 *        required: true
 *        type: string
 *      - name: grade
 *        in: formData
 *        required: true
 *        type: string
 *      - name: thickness
 *        in: formData
 *        required: true
 *        type: string
 *      - name: weightPerSqFoot
 *        in: formData
 *        required: true
 *        type: string
 *      - name: tensileStrength
 *        in: formData
 *        required: true
 *        type: string
 *      - name: sheetWidth
 *        in: formData
 *        required: true
 *        type: string
 *      - name: sheetHeight
 *        in: formData
 *        required: true
 *        type: string
 *      - name: millProcess
 *        in: formData
 *        required: true
 *        type: string
 *      - name: pricePerSqFoot
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: Created
 */
materialRouter.post('/', validation.createMaterialValidation, controller.createNewMaterial);
/**
 * @openapi
 * /materials/{id}:
 *  put:
 *    tags:
 *      - Materials
 *    description: Update material by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *      - name: type
 *        in: formData
 *        required: false
 *        type: string
 *      - name: grade
 *        in: formData
 *        required: false
 *        type: string
 *      - name: thickness
 *        in: formData
 *        required: false
 *        type: string
 *      - name: weightPerSqFoot
 *        in: formData
 *        required: false
 *        type: string
 *      - name: tensileStrength
 *        in: formData
 *        required: false
 *        type: string
 *      - name: sheetWidth
 *        in: formData
 *        required: false
 *        type: string
 *      - name: sheetHeight
 *        in: formData
 *        required: false
 *        type: string
 *      - name: millProcess
 *        in: formData
 *        required: false
 *        type: string
 *      - name: pricePerSqFoot
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      204:
 *        description:
 */
materialRouter.put('/:id', validation.queryParamsValidation, controller.updateMaterialById);
/**
 * @openapi
 * /materials/{id}:
 *  delete:
 *    tags:
 *      - Materials
 *    description: Delete material by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Success
 */
materialRouter.delete('/:id', validation.queryParamsValidation, controller.deleteMaterialById);
exports.default = materialRouter;
