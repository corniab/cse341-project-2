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
exports.insertNewMaterial = exports.findAllMaterials = void 0;
const mongoose_1 = require("mongoose");
const connection_db_1 = require("./connection.db");
const materialSchema = new mongoose_1.Schema({
    type: String,
    grade: String,
    thickness: String,
    weightPerSqFoot: String,
    tensileStrength: String,
    sheetWidth: String,
    sheetHeight: String,
    millProcess: String,
    pricePerSqFoot: String,
});
const Material = connection_db_1.connection.client.model("Material", materialSchema);
function findAllMaterials() {
    return __awaiter(this, void 0, void 0, function* () {
        const materials = yield Material.find({});
        return materials;
    });
}
exports.findAllMaterials = findAllMaterials;
function insertNewMaterial(newMaterial) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Material.create(newMaterial);
        return result;
    });
}
exports.insertNewMaterial = insertNewMaterial;
