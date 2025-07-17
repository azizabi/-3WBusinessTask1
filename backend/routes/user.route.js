import express from 'express';
import { getUsers, createUser, getLeaderboard } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/leaderboard', getLeaderboard);

export default router;











































