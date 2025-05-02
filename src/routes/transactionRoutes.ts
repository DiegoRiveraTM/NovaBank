import { Router } from 'express';
import { deposits, transfers, getTransactions } from '../controllers/transactionController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/deposits', authenticate, deposits)
router.post('/transfers', authenticate, transfers);
//router.post('/withdrawals', authenticate, withdrawals); //This route is not implmented yet 
router.get('/', authenticate, getTransactions);

export default router;