"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection_db_1 = require("./connection.db");
const schema = new mongoose_1.default.Schema({ name: "string", size: "string" });
const Tank = connection_db_1.connection.client.model("Tank", schema);
Tank.create({ size: "small" }, (err, small) => {
    if (err) {
        console.log("Failed to create tank: " + err);
        return;
    }
    console.log("created tank");
});
