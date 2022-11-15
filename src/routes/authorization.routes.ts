import express from 'express';
import * as authorization from '../controllers/authorization.controllers';

const authRouter = express.Router();

authRouter.get('/login', authorization.login);

authRouter.get('/callback', authorization.callback);

authRouter.get('/logout', authorization.logout);

export default authRouter;
