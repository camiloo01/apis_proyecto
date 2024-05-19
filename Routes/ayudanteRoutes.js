const express = require('express');
const router = express.Router();
const ayudanteController = require('../Controllers/ayudanteController');

router.get('/', ayudanteController.obtenerTodosLosAyudantes);
router.post('/', ayudanteController.crearAyudante);
router.get('/:id', ayudanteController.obtenerAyudantePorId);
router.put('/:id', ayudanteController.actualizarAyudante);
router.delete('/:id', ayudanteController.eliminarAyudante);

module.exports = router;
