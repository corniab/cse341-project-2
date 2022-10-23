import { body } from "express-validator";
import { check } from "express-validator/src/middlewares/validation-chain-builders";

// Validate the creation of a new material
export const createMaterialValidation = [
  body("type").trim().not().isEmpty().withMessage("Fields cannot be empty."),
  body("grade").trim().not().isEmpty().withMessage("Fields cannot be empty."),
  body("thickness")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
  body("weightPerSqFoot")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
  body("tensileStrength")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
  body("sheetWidth")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
  body("sheetHeight")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
  body("millProcess")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fields cannot be empty."),
];

export const queryParamsValidation = [
  check("id")
    .isString()
    .withMessage("Id must be a string.")
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage("Must be 24 characters long."),
];
