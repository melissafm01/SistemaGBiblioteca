const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

// Importa los modelos correspondientes
const Usuario = require('./usuarioModel');  // Ajusta la ruta según la ubicación de usuarioModel.js
const Libro = require('./librosModel');  // Ajusta la ruta según la ubicación de libroModel.js

const Prestamo = sequelize.define('Prestamo', {
  fecha_prestamo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'devuelto', 'atrasado'),
    defaultValue: 'pendiente',
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

// Relación entre las tablas para que coja los ids en la base de datos
Prestamo.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Prestamo.belongsTo(Libro, { foreignKey: 'id_libro' });

module.exports = Prestamo;
