const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Usuario = sequelize.define(
  'Usuario',
   {
    
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.ENUM('admin', 'usuario'),
    defaultValue: 'usuario',
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

module.exports = Usuario;
