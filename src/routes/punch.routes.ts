import express from "express";
import * as controller from "../controllers/punch.controllers";
import * as validation from "../validation/validation";

const punchRouter = express.Router();

/**
 * @swagger
 * /punches:
 *    get:
 *      description: Get all punches
 *      responses:
 *        200:
 *          description: Success
 */
punchRouter.get("/", controller.getAllPunches);
/**
 * @swagger
 * /punches/{id}:
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
punchRouter.get(
  "/:id",
  validation.queryParamsValidation,
  controller.getPunchById
);

/**
 * @swagger
 * /punches:
 *    post:
 *      description: Create a new punch
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: type
 *          in: formData
 *          required: true
 *          type: string
 *        - name: throatWidth
 *          in: formData
 *          required: true
 *          type: string
 *        - name: punchRadius
 *          in: formData
 *          required: true
 *          type: string
 *        - name: punchAngle
 *          in: formData
 *          required: true
 *          type: string
 *        - name: punchDepth
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *        201:
 *          description: Created
 */
punchRouter.post("/", controller.createNewPunch);

/**
 * @swagger
 * /punches/{id}:
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
 *       - name: throatWidth
 *         in: formData
 *         required: false
 *         type: string
 *       - name: punchRadius
 *         in: formData
 *         required: false
 *         type: string
 *       - name: punchAngle
 *         in: formData
 *         required: false
 *         type: string
 *       - name: punchDepth
 *         in: formData
 *         required: false
 *         type: string
 *     responses:
 *       204:
 *         description:
 */
punchRouter.put(
  "/:id",
  validation.queryParamsValidation,
  controller.updatePunchById
);

/**
 * @swagger
 * /punches/{id}:
 *    delete:
 *      description: Delete punch by id
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
punchRouter.delete(
  "/:id",
  validation.queryParamsValidation,
  controller.deletePunchById
);

export default punchRouter;
