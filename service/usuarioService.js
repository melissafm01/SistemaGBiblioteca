const Usuario = require('../models/usuarioModel');

// Crear un usuario
const crearUsuario = async (data) => {
  return await Usuario.create(data);
};

// Obtener todos los usuarios
const obtenerUsuarios = async () => {
  return await Usuario.findAll();
};

// Obtener un usuario por su ID
const obtenerUsuarioPorId = async (id) => {
  return await Usuario.findByPk(id);
};

// Actualizar un usuario
const actualizarUsuario = async (id, data) => {
  return await Usuario.update(data, { where: { id } });
};

// Eliminar un usuario
const eliminarUsuario = async (id) => {
  return await Usuario.destroy({ where: { id } });
};

module.exports = { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario };
