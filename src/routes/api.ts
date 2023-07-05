import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import User from '@src/models/User';

const apiRouter = Router();
const validate = jetValidator();

const userRouter = Router();

export default apiRouter;
