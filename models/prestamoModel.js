const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');


const Usuario = require('./usuarioModel'); 
const Libro = require('./librosModel');  

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


Prestamo.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Prestamo.belongsTo(Libro, { foreignKey: 'id_libro' });

module.exports = Prestamo;
