import express, { Request, Response } from 'express';
import { getHomePage } from '../controllers/index.controllers';
import materialRouter from './material.routes';
import diesRouter from './die.routes';
import punchRouter from './punch.routes';
import authRouter from './authorization.routes';
import userRouter from './user.routes';
import { loadUser } from '../middleware/loadUser';

const router = express.Router();

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
router.get('/', getHomePage);

// Materials router
router.use('/materials', loadUser, materialRouter);

// Dies router
router.use('/dies', loadUser, diesRouter);

// Punch router
router.use('/punches', loadUser, punchRouter);

// Auth router
router.use('/authorization', authRouter);

// User router
router.use('/users', userRouter);

export default router;
