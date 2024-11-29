const express = require('express');
const router = express.Router();
const LmasSolicitadosController = require('../controller/LmasSolicitados');


router.get('/', LmasSolicitadosController.obtenerLibrosMasSolicitados);

module.exports = router;
