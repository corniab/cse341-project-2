"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestError = void 0;
function requestError(error, res) {
    let message = error;
    if (error instanceof Error) {
        message = {
            type: error.name,
            message: error.message,
        };
    }
    res.status(500).json({ Error: message });
}
exports.requestError = requestError;
