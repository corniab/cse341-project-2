import express from "express";
import {
  getAllMaterials,
  createNewMaterial,
} from "../controllers/material.controllers";

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
materialRouter.get("/", getAllMaterials);

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
materialRouter.post("/", createNewMaterial);

// PUT

// DELETE

export default materialRouter;
