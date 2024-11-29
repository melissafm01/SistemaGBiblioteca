
const conn = require('../config/dataBase');

//proyecto con mas pruebas
exports. obtenerLibrosMasSolicitados = async (req, res) => {
    try {
        const [resultado] = await conn.query(`
           SELECT L.titulo, COUNT(P.id_libro) AS cantidad_prestamos
FROM Libros L
JOIN Prestamos P ON L.id = P.id_libro
GROUP BY L.id
ORDER BY cantidad_prestamos DESC;
        `);
        res.json(resultado); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener libros mas solicitados: ' + error });
    }
};
