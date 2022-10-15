"use strict";
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
exports.createNewMaterial = exports.getAllMaterials = void 0;
const material_db_1 = require("../db/material.db");
// Get all materials
function getAllMaterials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, material_db_1.findAllMaterials)();
        if (result) {
            console.log("[database] /GET materials success!");
            console.log(result);
            res.json(result);
        }
        else {
            console.log("[database] /GET materials failed!");
        }
    });
}
exports.getAllMaterials = getAllMaterials;
// Create new material
function createNewMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, material_db_1.insertNewMaterial)(req.body);
        if (result) {
            console.log("😻 [database] /POST material success!");
            res.status(201).json({ _id: result._id });
        }
        else {
            res.status(500).statusMessage = "😿 [ server ] Internal server error";
            console.log("😿 [database] /POST material failed!");
        }
    });
}
exports.createNewMaterial = createNewMaterial;
