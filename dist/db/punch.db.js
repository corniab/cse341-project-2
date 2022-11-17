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
exports.deletePunch = exports.updatePunch = exports.insertNewPunch = exports.findPunchById = exports.findAllPunches = void 0;
const mongoose_1 = require("mongoose");
const connection_db_1 = __importDefault(require("./connection.db"));
const punchSchema = new mongoose_1.Schema({
    type: String,
    throatWidth: String,
    punchRadius: String,
    punchAngle: String,
    punchDepth: String,
});
const Punch = connection_db_1.default.client.model("Punch", punchSchema);
function findAllPunches() {
    return __awaiter(this, void 0, void 0, function* () {
        const materials = yield Punch.find({});
        return materials;
    });
}
exports.findAllPunches = findAllPunches;
function findPunchById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const material = yield Punch.findById(id);
        return material;
    });
}
exports.findPunchById = findPunchById;
function insertNewPunch(newDie) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Punch.create(newDie);
        return result;
    });
}
exports.insertNewPunch = insertNewPunch;
function updatePunch(id, requestBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Punch.updateOne({ _id: id }, requestBody);
        return result;
    });
}
exports.updatePunch = updatePunch;
function deletePunch(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Punch.deleteOne({ _id: id });
        return result;
    });
}
exports.deletePunch = deletePunch;
