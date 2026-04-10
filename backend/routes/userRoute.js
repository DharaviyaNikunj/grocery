import express from 'express';
import {
  registerUser,
  loginUser,
  forgotPassword,   // ✅ ADD THIS
} from '../controllers/userController.js';

const userRouter = express.Router();

// Public
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// ✅ Forgot password
userRouter.post('/forgot-password', forgotPassword);

export default userRouter;
