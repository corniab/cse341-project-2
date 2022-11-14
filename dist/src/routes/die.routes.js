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
const express_openid_connect_1 = require("express-openid-connect");
const dieRouter = express_1.default.Router();
/**
 * @openapi
 * components:
 *  schemas:
 *    Die:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: Unique identification number
 *        type:
 *          type: string
 *          description: Description of the die
 *        width:
 *          type: string
 *          description: Width of the die in inches
 *        veeWidth:
 *          type: string
 *          description: Width of the vee opening in inches
 *        veeAngle:
 *          type: string
 *          description: Angle of the vee opening in degrees
 *        maxMaterialThickness:
 *          type: string
 *          description: Thickest material the dee can form safely
 */
/**
 * @openapi
 * tags:
 *  name: Dies
 *  description: API to manage die inventory
 */
/**
 * @openapi
 * /dies:
 *  get:
 *    tags:
 *      - Dies
 *    description: Get all dies
 *    responses:
 *      200:
 *        description: Success
 */
dieRouter.get('/', (0, express_openid_connect_1.requiresAuth)(), controller.getAllDies);
/**
 * @openapi
 * /dies/{id}:
 *  get:
 *    tags:
 *      - Dies
 *    description: Get die by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Die'
 *    responses:
 *      200:
 *        description: Success
 */
dieRouter.get('/:id', validation.queryParamsValidation, controller.getDieById);
/**
 * @openapi
 * /dies:
 *  post:
 *    tags:
 *      - Dies
 *    description: Create a new die
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: type
 *        in: formData
 *        required: true
 *        type: string
 *      - name: width
 *        in: formData
 *        required: true
 *        type: string
 *      - name: veeWidth
 *        in: formData
 *        required: true
 *        type: string
 *      - name: veeAngle
 *        in: formData
 *        required: true
 *        type: string
 *      - name: maxMaterialThickness
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: Created
 */
dieRouter.post('/', controller.createNewDie);
/**
 * @openapi
 * /dies/{id}:
 *  put:
 *    tags:
 *      - Dies
 *    description: Update die by id
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
 *      - name: width
 *        in: formData
 *        required: false
 *        type: string
 *      - name: veeWidth
 *        in: formData
 *        required: false
 *        type: string
 *      - name: veeAngle
 *        in: formData
 *        required: false
 *        type: string
 *      - name: maxMaterialThickness
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      204:
 *        description
 */
dieRouter.put('/:id', validation.queryParamsValidation, controller.updateDieById);
/**
 * @openapi
 * /dies/{id}:
 *  delete:
 *    tags:
 *      - Dies
 *    description: Delete die by id
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
dieRouter.delete('/:id', validation.queryParamsValidation, controller.deleteDieById);
exports.default = dieRouter;
