import express from 'express';
import { getPenangananByNamaPenyakitHandler,  getPenangananByNamaHamaHandler, getPenangananByIdHandler, addPenangananHandler, updatePenangananHandler, deletePenangananHandler } from '../controllers/penanganController.js';

const router = express.Router();

router.get('/penyakit/:nama_penyakit', getPenangananByNamaPenyakitHandler);
router.get('/hama/:nama_hama', getPenangananByNamaHamaHandler);
router.get('/id/:id_penanganan', getPenangananByIdHandler);
router.post('/', addPenangananHandler);
router.put('/:id_penanganan', updatePenangananHandler);
router.delete('/:id_penanganan', deletePenangananHandler);

export default router;