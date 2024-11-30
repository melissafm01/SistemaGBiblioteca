const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');


router.post('/', usuarioController.crearUsuario);
/*{
  "nombre": "Carlos López",
  "telefono": "123456789",
  "tipo": "usuario"
}
 */

router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuarioPorId);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
