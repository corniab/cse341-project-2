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
const user_db_1 = __importDefault(require("../db/user.db"));
const routes_exceptions_1 = require("../exceptions/routes.exceptions");
exports.default = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user_db_1.default.find({}).catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.sendStatus(404);
        }
    }),
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user_db_1.default.findById(req.params.id).catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.sendStatus(404);
        }
    }),
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user_db_1.default.create(req.body).catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        if (result) {
            res.status(201).json({ _id: result._id });
        }
        else {
            res.sendStatus(404);
        }
    }),
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user_db_1.default.updateOne({ _id: req.params.id }, req.body).catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        if (result != null && result.acknowledged && result.modifiedCount > 0)
            res.sendStatus(204);
        else
            res.sendStatus(404);
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield user_db_1.default.deleteOne({ _id: req.params.id }).catch((error) => (0, routes_exceptions_1.requestError)(error, res));
        // Send result if it exists.
        if (result != null && result.acknowledged && result.deletedCount > 0)
            res.sendStatus(200);
        else
            res.sendStatus(404);
    }),
};
