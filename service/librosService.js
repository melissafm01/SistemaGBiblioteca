const Libro = require('../models/librosModel');

// Crear un libro
const crearLibro = async (data) => {
  return await Libro.create(data);
};

// Obtener todos los libros
const obtenerLibros = async () => {
  return await Libro.findAll();
};

// Obtener un libro por su ID
const obtenerLibroPorId = async (id) => {
  return await Libro.findByPk(id);
};

// Actualizar un libro
const actualizarLibro = async (id, data) => {
  return await Libro.update(data, { where: { id } });
};

// Eliminar un libro
const eliminarLibro = async (id) => {
  return await Libro.destroy({ where: { id } });
};

module.exports = { crearLibro, obtenerLibros, obtenerLibroPorId, actualizarLibro, eliminarLibro };
