import express from 'express';
import { claimPoints, getClaimHistory } from '../controllers/claim.controller.js';

const router = express.Router();

router.post('/', claimPoints);
router.get('/history', getClaimHistory);

export default router;
