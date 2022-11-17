"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_controllers_1 = require("../controllers/index.controllers");
const material_routes_1 = __importDefault(require("./material.routes"));
const die_routes_1 = __importDefault(require("./die.routes"));
const punch_routes_1 = __importDefault(require("./punch.routes"));
const authorization_routes_1 = __importDefault(require("./authorization.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const loadUser_1 = require("../middleware/loadUser");
const router = express_1.default.Router();
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            # arbitrary name for the security scheme
 *       type: http
 *       scheme: bearer
 */
/**
 * @openapi
 * security:
 *  - oAuthSample:
 *    - read
 *    - write
 */
// Root path
router.get('/', index_controllers_1.getHomePage);
// Materials router
router.use('/materials', loadUser_1.loadUser, material_routes_1.default);
// Dies router
router.use('/dies', loadUser_1.loadUser, die_routes_1.default);
// Punch router
router.use('/punches', loadUser_1.loadUser, punch_routes_1.default);
// Auth router
router.use('/authorization', authorization_routes_1.default);
// User router
router.use('/users', user_routes_1.default);
exports.default = router;
