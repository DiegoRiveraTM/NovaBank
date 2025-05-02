import express from 'express';
import { getProfile } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/me', authenticate, getProfile);

export default router;