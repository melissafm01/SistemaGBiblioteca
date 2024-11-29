const express = require('express');
const router = express.Router();
const librosController = require('../controller/librosController');


router.post('/', librosController.crearLibro);

  /* {
  "titulo": "El Gran Libro",
   "autor": "Juan Pérez",
  "año_publicacion": 2023
  }*/
  
router.get('/', librosController.obtenerLibros);
router.get('/:id', librosController.obtenerLibroPorId);
router.put('/:id', librosController.actualizarLibro);
router.delete('/:id', librosController.eliminarLibro);

module.exports = router;
