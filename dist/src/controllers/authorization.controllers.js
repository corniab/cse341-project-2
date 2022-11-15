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
exports.logout = exports.callback = exports.login = void 0;
const app_1 = __importDefault(require("../config/app"));
function login(req, res) {
    const authorizationURL = `${app_1.default.authorizationHost}/authorize?response_type=code&client_id=${app_1.default.clientId}&redirect_uri=${encodeURIComponent(app_1.default.redirectUrl)}&state=1234&scope=openid%20profile%20email`;
    res.redirect(authorizationURL);
}
exports.login = login;
function callback(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${app_1.default.authorizationHost}/oauth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: app_1.default.clientId,
                client_secret: app_1.default.clientSecret,
                redirect_uri: app_1.default.redirectUrl,
                scope: 'openid profile email',
                code: req.query.code,
            }),
        });
        const jsonResponse = yield response.json();
        res.cookie('userSessionId', 'Bearer ' + jsonResponse.access_token, {
            maxAge: 400000,
        });
        res.redirect('http://localhost:3000');
    });
}
exports.callback = callback;
function logout(req, res) {
    res.clearCookie('userInfo');
    res.clearCookie('userSessionId');
    res.redirect('http://localhost:3000');
}
exports.logout = logout;
