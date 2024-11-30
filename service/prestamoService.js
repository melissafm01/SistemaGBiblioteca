const Prestamo = require('../models/prestamoModel');


const crearPrestamo = async (data) => {
  return await Prestamo.create(data);
};


const obtenerPrestamos = async () => {
  return await Prestamo.findAll();
};


const obtenerPrestamoPorId = async (id) => {
  return await Prestamo.findByPk(id);
};


const actualizarPrestamo = async (id, data) => {
  return await Prestamo.update(data, { where: { id } });
};


const eliminarPrestamo = async (id) => {
  return await Prestamo.destroy({ where: { id } });
};

module.exports = { crearPrestamo, obtenerPrestamos, obtenerPrestamoPorId, actualizarPrestamo, eliminarPrestamo };
