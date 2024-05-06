import { Router } from 'express';
import { getBarco, getBarcos, createBarco, updateBarco, deleteBarco , barcoSocio } from '../controller/barco.controller.js';
const router = Router();

router.get('/barcos', getBarcos);
router.get('/barcos/:num_matricula', getBarco);
router.post('/barcos', createBarco);
router.put('/barcos/:num_matricula', updateBarco);
router.delete('/barcos/:num_matricula', deleteBarco); // Asegúrate de que el nombre del parámetro coincida con la columna original de la tabla
router.put('/barco/:num_matricula' ,  barcoSocio)
export default router;
