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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDie = exports.updateDie = exports.insertNewDie = exports.findDieById = exports.findAllDies = void 0;
const mongoose_1 = require("mongoose");
const connection_db_1 = __importDefault(require("./connection.db"));
const dieSchema = new mongoose_1.Schema({
    type: String,
    width: String,
    veeWidth: String,
    veeAngle: String,
    maxMaterialThickness: String,
});
const Die = connection_db_1.default.client.model("Die", dieSchema);
function findAllDies() {
    return __awaiter(this, void 0, void 0, function* () {
        const materials = yield Die.find({});
        return materials;
    });
}
exports.findAllDies = findAllDies;
function findDieById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const material = yield Die.findById(id);
        return material;
    });
}
exports.findDieById = findDieById;
function insertNewDie(newDie) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Die.create(newDie);
        return result;
    });
}
exports.insertNewDie = insertNewDie;
function updateDie(id, requestBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Die.updateOne({ _id: id }, requestBody);
        return result;
    });
}
exports.updateDie = updateDie;
function deleteDie(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Die.deleteOne({ _id: id });
        return result;
    });
}
exports.deleteDie = deleteDie;
