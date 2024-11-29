
const conn = require('../config/dataBase');

//proyecto con mas pruebas
exports. prestamosMasRecientes = async (req, res) => {
    try {
        const [resultado] = await conn.query(`
          SELECT U.nombre, L.titulo, P.fecha_prestamo
FROM Prestamos P
JOIN Usuarios U ON P.id_usuario = U.id
JOIN Libros L ON P.id_libro = L.id
ORDER BY P.fecha_prestamo DESC;
        `);
        res.json(resultado); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los prestamos mas recientes: ' + error });
    }
};
