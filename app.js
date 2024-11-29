
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./config/dataBase');
const librosRoutes = require('./router/librosRoutes');
const usuarioRoutes = require('./router/usuarioRoutes');
const prestamoRoutes = require('./router/prestamoRoutes');
const LmasSolicitadosRoutes = require('./router/LmassolicitadosRoutes');
const PmasRecientesRoutes = require('./router/PmasRecientesRoutes');

dotenv.config();

app.use(express.json());
app.use('/api/libros', librosRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/prestamos', prestamoRoutes);
app.use('/api/lms', LmasSolicitadosRoutes);
app.use('/api/pmr', PmasRecientesRoutes);
const PORT = process.env.PORT


//servidor
let startDB = async() =>{
    try {
       await sequelize.sync();
        console.log('base de datos sincronizada');

       app.listen(PORT, () =>{
        console.log(`servidor corriendo en: ${PORT}`);
    });
    }
    catch (e){
        console.log("Erro al conectar con la base de datos")
    }
};
startDB();