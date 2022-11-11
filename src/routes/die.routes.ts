import express from 'express';
import * as controller from '../controllers/die.controllers';
import * as validation from '../validation/validation';

const dieRouter = express.Router();
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
dieRouter.get('/', controller.getAllDies);
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

dieRouter.put(
  '/:id',
  validation.queryParamsValidation,
  controller.updateDieById
);

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
dieRouter.delete(
  '/:id',
  validation.queryParamsValidation,
  controller.deleteDieById
);

export default dieRouter;
