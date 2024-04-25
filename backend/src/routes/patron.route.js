import { Router } from 'express';
import { getPatron, getPatrones, createPatron, updatePatron, deletePatron } from '../controller/patron.controller.js';

const router = Router();

router.get('/patrones', getPatrones);
router.get('/patrones/:idepatron', getPatron);
router.post('/patrones', createPatron);
router.put('/patrones/:idepatron', updatePatron);
router.delete('/patrones/:idepatron', deletePatron);

export default router;
