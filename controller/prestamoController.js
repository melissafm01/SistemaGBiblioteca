const PrestamoService = require('../service/prestamoService');


const crearPrestamo = async (req, res) => {
  try {
    const prestamo = await PrestamoService.crearPrestamo(req.body);
    res.json(prestamo);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerPrestamos = async (req, res) => {
  try {
    const prestamos = await PrestamoService.obtenerPrestamos();
    res.json(prestamos);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerPrestamoPorId = async (req, res) => {
  try {
    const prestamo = await PrestamoService.obtenerPrestamoPorId(req.params.id);
    if (!prestamo) {
      return res.json({ error: 'Préstamo no encontrado' });
    }
    res.json(prestamo);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const actualizarPrestamo = async (req, res) => {
  try {
    const prestamo = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
    if (prestamo[0] === 0) {
      return res.json({ error: 'Préstamo no encontrado' });
    }
    res.json({ message: 'Préstamo actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


const eliminarPrestamo = async (req, res) => {
  try {
    const result = await PrestamoService.eliminarPrestamo(req.params.id);
    if (result === 0) {
      return res.json({ error: 'Préstamo no encontrado' });
    }
    res.json({ message: 'Préstamo eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { crearPrestamo, obtenerPrestamos, obtenerPrestamoPorId, actualizarPrestamo, eliminarPrestamo };
