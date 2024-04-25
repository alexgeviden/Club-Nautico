import { Router } from 'express';
import { getSalida, getSalidas, createSalida, updateSalida, deleteSalida } from '../controller/salidas.controller.js';

const router = Router();

router.get('/salidas', getSalidas);
router.get('/salidas/:idsalida', getSalida);
router.post('/salidas', createSalida);
router.put('/salidas/:idsalida', updateSalida);
router.delete('/salidas/:idsalida', deleteSalida);

export default router;
