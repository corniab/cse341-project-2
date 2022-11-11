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
const controller = __importStar(require("../controllers/punch.controllers"));
const validation = __importStar(require("../validation/validation"));
const punchRouter = express_1.default.Router();
/**
 * @openapi
 * components:
 *  schemas:
 *    Punch:
 *      type: object
 *      properties:
 *        type:
 *          type: string
 *          description: Description of punch
 *        throatWidth:
 *          type: string
 *          description: Throat width of punch in inches
 *        punchRadius:
 *          type: string
 *          description: Radius in inches of punch tip
 *        punchAngle:
 *          type: string
 *          description: Angle in degrees of punch tip
 *        punchDepth:
 *          type: string
 *          description: Overall depth of punch in inches
 */
/**
 * @openapi
 * tags:
 *  name: Punches
 *  description: API to manage punch inventory
 */
/**
 * @openapi
 * /punches:
 *  get:
 *    tags:
 *      - Punches
 *    description: Get all punches
 *    responses:
 *      200:
 *        description: Success
 */
punchRouter.get('/', controller.getAllPunches);
/**
 * @openapi
 * /punches/{id}:
 *  get:
 *    tags:
 *      - Punches
 *    description: Get die by id
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
punchRouter.get('/:id', validation.queryParamsValidation, controller.getPunchById);
/**
 * @openapi
 * /punches:
 *  post:
 *    tags:
 *      - Punches
 *    description: Create a new punch
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: type
 *        in: formData
 *        required: true
 *        type: string
 *      - name: throatWidth
 *        in: formData
 *        required: true
 *        type: string
 *      - name: punchRadius
 *        in: formData
 *        required: true
 *        type: string
 *      - name: punchAngle
 *        in: formData
 *        required: true
 *        type: string
 *      - name: punchDepth
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: Created
 */
punchRouter.post('/', controller.createNewPunch);
/**
 * @openapi
 * /punches/{id}:
 *  put:
 *    tags:
 *      - Punches
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
 *      - name: throatWidth
 *        in: formData
 *        required: false
 *        type: string
 *      - name: punchRadius
 *        in: formData
 *        required: false
 *        type: string
 *      - name: punchAngle
 *        in: formData
 *        required: false
 *        type: string
 *      - name: punchDepth
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      204:
 *        description:
 */
punchRouter.put('/:id', validation.queryParamsValidation, controller.updatePunchById);
/**
 * @openapi
 * /punches/{id}:
 *  delete:
 *    tags:
 *      - Punches
 *    description: Delete punch by id
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
punchRouter.delete('/:id', validation.queryParamsValidation, controller.deletePunchById);
exports.default = punchRouter;
