const express = require('express');
const router = express.Router();
const beneficiarioController = require('../Controllers/beneficiarioController');

router.get('/', beneficiarioController.obtenerTodosLosBeneficiarios);
router.post('/', beneficiarioController.crearBeneficiario);
router.get('/:id', beneficiarioController.obtenerBeneficiarioPorId);
router.put('/:id', beneficiarioController.actualizarBeneficiario);
router.delete('/:id', beneficiarioController.eliminarBeneficiario);

module.exports = router;

