import { Router } from 'express';
import { register } from '../controllers/user-register.js';

const userRouter = Router();


userRouter.route('/register').post(register);

export default userRouter