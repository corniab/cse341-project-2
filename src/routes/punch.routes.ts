import express from 'express';
import * as controller from '../controllers/punch.controllers';
import * as validation from '../validation/validation';

const punchRouter = express.Router();

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
punchRouter.get(
  '/:id',
  validation.queryParamsValidation,
  controller.getPunchById
);

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
punchRouter.put(
  '/:id',
  validation.queryParamsValidation,
  controller.updatePunchById
);

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
punchRouter.delete(
  '/:id',
  validation.queryParamsValidation,
  controller.deletePunchById
);

export default punchRouter;
