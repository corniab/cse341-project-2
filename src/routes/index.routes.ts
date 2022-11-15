import express, { Request, Response } from 'express';
import { getHomePage } from '../controllers/index.controllers';
import materialRouter from './material.routes';
import diesRouter from './die.routes';
import punchRouter from './punch.routes';
import authRouter from './authorization.routes';
import { loadUser } from '../middleware/loadUser';

const router = express.Router();

/**
 * @openapi
 * components:
 *  securitySchemes:
 *    oAuthSample:
 *      type: oauth2
 *      description:
 *      flows:
 *        authorizationCode:
 *          authorizationUrl: https://api.example.com/oauth2/authorize
 *          scopes:
 *            read: read access
 *            write: modify access
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
router.use('/dies', diesRouter);

// Punch router
router.use('/punches', punchRouter);

// Auth router
router.use('/authorization', authRouter);

export default router;
