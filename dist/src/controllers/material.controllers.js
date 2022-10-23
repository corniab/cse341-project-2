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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMaterialById = exports.updateMaterialById = exports.createNewMaterial = exports.getMaterialById = exports.getAllMaterials = void 0;
const db = __importStar(require("../db/material.db"));
const routes_exceptions_1 = require("../exceptions/routes.exceptions");
const validation_result_1 = require("express-validator/src/validation-result");
// Get all materials
function getAllMaterials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db
            .findAllMaterials()
            .catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result)
            res.status(200).json(result);
        else
            res.sendStatus(404);
    });
}
exports.getAllMaterials = getAllMaterials;
// Get by id
function getMaterialById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate request inputs
        const errors = (0, validation_result_1.validationResult)(req);
        if (errors.isEmpty() === false) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        const result = yield db
            .findMaterialById(id)
            .catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result)
            res.status(200).json(result);
        else
            res.sendStatus(404);
    });
}
exports.getMaterialById = getMaterialById;
// Create new material
function createNewMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate request inputs
        const errors = (0, validation_result_1.validationResult)(req);
        if (errors.isEmpty() === false) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = yield db
            .insertNewMaterial(req.body)
            .catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result)
            res.status(201).json({ _id: result._id });
        else
            res.sendStatus(404);
    });
}
exports.createNewMaterial = createNewMaterial;
// Update material
function updateMaterialById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate request inputs
        const errors = (0, validation_result_1.validationResult)(req);
        if (errors.isEmpty() === false) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = yield db
            .updateMaterial(req.params.id, req.body)
            .catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result)
            res.sendStatus(204);
        else
            res.sendStatus(404);
    });
}
exports.updateMaterialById = updateMaterialById;
// Delete material
function deleteMaterialById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate request inputs
        const errors = (0, validation_result_1.validationResult)(req);
        if (errors.isEmpty() === false) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = yield db
            .deleteMaterial(req.params.id)
            .catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result)
            res.sendStatus(200);
        else
            res.sendStatus(404);
    });
}
exports.deleteMaterialById = deleteMaterialById;
