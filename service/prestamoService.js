const Prestamo = require('../models/prestamoModel');

// Crear un préstamo
const crearPrestamo = async (data) => {
  return await Prestamo.create(data);
};

// Obtener todos los préstamos
const obtenerPrestamos = async () => {
  return await Prestamo.findAll();
};

// Obtener un préstamo por ID
const obtenerPrestamoPorId = async (id) => {
  return await Prestamo.findByPk(id);
};

// Actualizar un préstamo
const actualizarPrestamo = async (id, data) => {
  return await Prestamo.update(data, { where: { id } });
};

// Eliminar un préstamo
const eliminarPrestamo = async (id) => {
  return await Prestamo.destroy({ where: { id } });
};

module.exports = { crearPrestamo, obtenerPrestamos, obtenerPrestamoPorId, actualizarPrestamo, eliminarPrestamo };
