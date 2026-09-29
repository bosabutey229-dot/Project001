import { Router } from 'express';
import { createStudyPack, healthCheck } from '../controllers/learningController.js';

const router = Router();

router.get('/health', healthCheck);
router.post('/study-pack', createStudyPack);

export default router;
