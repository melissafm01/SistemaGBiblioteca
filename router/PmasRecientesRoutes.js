const express = require('express');
const router = express.Router();
const PmasRecientesController = require('../controller/PmasRecientesController');


router.get('/', PmasRecientesController.prestamosMasRecientes);

module.exports = router;
