const PrestamoService = require('../service/prestamoService');

// Crear un préstamo
const crearPrestamo = async (req, res) => {
  try {
    const prestamo = await PrestamoService.crearPrestamo(req.body);
    res.json(prestamo);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Obtener todos los préstamos
const obtenerPrestamos = async (req, res) => {
  try {
    const prestamos = await PrestamoService.obtenerPrestamos();
    res.json(prestamos);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Obtener un préstamo por ID
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

// Actualizar un préstamo
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

// Eliminar un préstamo
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
