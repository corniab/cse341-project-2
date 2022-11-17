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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../config/app"));
class Connection {
    constructor() {
        // Connection String
        this.uri = `mongodb+srv://${app_1.default.dbUserName}:${app_1.default.dbPassword}@nodeapp2.rloalnf.mongodb.net/?retryWrites=true&w=majority`;
        this.client = mongoose_1.default;
    }
    // Makes a connection to the database.
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('🔌 [database] Connecting to db...');
            try {
                yield this.client.connect(this.uri, { dbName: 'sheetmetal' });
                console.log('🤝 [database] Connection complete!');
            }
            catch (e) {
                console.log('😿 [database] Error: ' + e);
            }
        });
    }
}
const connection = new Connection();
exports.default = connection;
