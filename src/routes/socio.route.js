import {Router} from 'express';
import {getSocio , getSocios , createSocio , updateSocio , deleteSocio} from '../controller/socio.controller.js';
const router = Router();

router.get('/socios', getSocios);
router.get('/socios/:id', getSocio);
router.post('/socios', createSocio);
router.put('/socios/:id', updateSocio);
router.delete('/socios/:idsocio', deleteSocio); // Ha de llamarse como la columna original de la tabla

export default router;