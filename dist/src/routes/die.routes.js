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
const controller = __importStar(require("../controllers/die.controllers"));
const validation = __importStar(require("../validation/validation"));
const dieRouter = express_1.default.Router();
/**
 * @swagger
 * /dies:
 *    get:
 *      description: Get all dies
 *      responses:
 *        200:
 *          description: Success
 */
dieRouter.get("/", controller.getAllDies);
/**
 * @swagger
 * /dies/{id}:
 *    get:
 *      description: Get die by id
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
dieRouter.get("/:id", validation.queryParamsValidation, controller.getDieById);
/**
 * @swagger
 * /dies:
 *    post:
 *      description: Create a new die
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: type
 *          in: formData
 *          required: true
 *          type: string
 *        - name: width
 *          in: formData
 *          required: true
 *          type: string
 *        - name: veeWidth
 *          in: formData
 *          required: true
 *          type: string
 *        - name: veeAngle
 *          in: formData
 *          required: true
 *          type: string
 *        - name: maxMaterialThickness
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *        201:
 *          description: Created
 */
dieRouter.post("/", controller.createNewDie);
/**
 * @swagger
 * /dies/{id}:
 *   put:
 *     description: Update die by id
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
 *       - name: width
 *         in: formData
 *         required: false
 *         type: string
 *       - name: veeWidth
 *         in: formData
 *         required: false
 *         type: string
 *       - name: veeAngle
 *         in: formData
 *         required: false
 *         type: string
 *       - name: maxMaterialThickness
 *         in: formData
 *         required: false
 *         type: string
 *     responses:
 *       204:
 *         description:
 */
dieRouter.put("/:id", validation.queryParamsValidation, controller.updateDieById);
/**
 * @swagger
 * /dies/{id}:
 *    delete:
 *      description: Delete die by id
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
dieRouter.delete("/:id", validation.queryParamsValidation, controller.deleteDieById);
exports.default = dieRouter;
