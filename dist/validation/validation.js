"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryParamsValidation = exports.createMaterialValidation = void 0;
const express_validator_1 = require("express-validator");
const validation_chain_builders_1 = require("express-validator/src/middlewares/validation-chain-builders");
// Validate the creation of a new material
exports.createMaterialValidation = [
    (0, express_validator_1.body)("type").trim().not().isEmpty().withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("grade").trim().not().isEmpty().withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("thickness")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("weightPerSqFoot")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("tensileStrength")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("sheetWidth")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("sheetHeight")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
    (0, express_validator_1.body)("millProcess")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Fields cannot be empty."),
];
exports.queryParamsValidation = [
    (0, validation_chain_builders_1.check)("id")
        .isString()
        .withMessage("Id must be a string.")
        .trim()
        .isLength({ min: 24, max: 24 })
        .withMessage("Must be 24 characters long."),
];
