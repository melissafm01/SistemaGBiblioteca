const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');


const Libro = sequelize.define(
  'Libro',
   {

  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  año_publicacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponibilidad: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,

    
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});




module.exports = Libro;
