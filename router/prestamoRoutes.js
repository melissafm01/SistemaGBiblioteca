const express = require('express');
const router = express.Router();
const prestamoController = require('../controller/prestamoController');


router.post('/', prestamoController.crearPrestamo);

/*{
  "fecha_prestamo": "2024-11-28 14:00:00",
  "estado": "pendiente",
  "id_usuario": 1,
  "id_libro": 2
}
 */

router.get('/', prestamoController.obtenerPrestamos);
router.get('/:id', prestamoController.obtenerPrestamoPorId);
router.put('/:id', prestamoController.actualizarPrestamo); 
/*{
    "estado": "devuelto"
  }
   */
router.delete('/:id', prestamoController.eliminarPrestamo);

module.exports = router;
