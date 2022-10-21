import express from "express";
import * as controller from "../controllers/material.controllers";

const materialRouter = express.Router();

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

export default materialRouter;
