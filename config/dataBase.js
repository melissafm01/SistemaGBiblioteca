let Sequelize =  require ('sequelize');
let dotenv = require('dotenv');
dotenv.config();
let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:process.env.DB_HOST,
      dialect:'mysql',
     // logging:console.log//muestra las consultas dentro del server
    }
);

module.exports=sequelize


