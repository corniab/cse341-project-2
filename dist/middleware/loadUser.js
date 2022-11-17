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
exports.loadUser = void 0;
const app_1 = __importDefault(require("../config/app"));
const user_db_1 = __importDefault(require("../db/user.db"));
function loadUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.authorization) {
            const authZeroUser = yield fetchAuthZeroUser(req.headers.authorization);
            const user = yield findOrCreateUser(authZeroUser);
        }
        next();
    });
}
exports.loadUser = loadUser;
// Helper
function fetchAuthZeroUser(authorizationValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${app_1.default.authorizationHost}/userinfo`, {
            headers: { Authorization: authorizationValue },
        });
        return response.json();
    });
}
function findOrCreateUser(authZeroJson) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!authZeroJson)
            return;
        const existingUser = yield user_db_1.default.findOne({ identifer: authZeroJson.sub });
        if (existingUser)
            return existingUser;
        const newUser = yield user_db_1.default.create({
            identifer: authZeroJson.sub,
            email: authZeroJson.email,
            givenName: authZeroJson.given_name,
            familyName: authZeroJson.family_name,
            locale: authZeroJson.locale,
            picture: authZeroJson.picture,
        });
        return newUser;
    });
}
