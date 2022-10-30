import express from "express";
import * as controller from "../controllers/die.controllers";
import * as validation from "../validation/validation";

const dieRouter = express.Router();

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
dieRouter.put(
  "/:id",
  validation.queryParamsValidation,
  controller.updateDieById
);

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
dieRouter.delete(
  "/:id",
  validation.queryParamsValidation,
  controller.deleteDieById
);

export default dieRouter;
