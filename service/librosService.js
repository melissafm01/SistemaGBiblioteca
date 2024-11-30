const Libro = require('../models/librosModel');


const crearLibro = async (data) => {
  return await Libro.create(data);
};


const obtenerLibros = async () => {
  return await Libro.findAll();
};


const obtenerLibroPorId = async (id) => {
  return await Libro.findByPk(id);
};


const actualizarLibro = async (id, data) => {
  return await Libro.update(data, { where: { id } });
};


const eliminarLibro = async (id) => {
  return await Libro.destroy({ where: { id } });
};

module.exports = { crearLibro, obtenerLibros, obtenerLibroPorId, actualizarLibro, eliminarLibro };
