const LibroService = require('../service/librosService');

const crearLibro = async (req, res) => {
  try {
    const libro = await LibroService.crearLibro(req.body);
    res.json(libro);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerLibros = async (req, res) => {
  try {
    const libros = await LibroService.obtenerLibros();
    res.json(libros);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const obtenerLibroPorId = async (req, res) => {
  try {
    const libro = await LibroService.obtenerLibroPorId(req.params.id);
    if (!libro) {
      return res.json({ error: 'Libro no encontrado' });
    }
    res.json(libro);
  } catch (error) {
    res.json({ error: error.message });
  }
};


const actualizarLibro = async (req, res) => {
  try {
    const libro = await LibroService.actualizarLibro(req.params.id, req.body);
    if (libro[0] === 0) {
      return res.json({ error: 'Libro no encontrado' });
    }
    res.json({ message: 'Libro actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


const eliminarLibro = async (req, res) => {
  try {
    const result = await LibroService.eliminarLibro(req.params.id);
    if (result === 0) {
      return res.json({ error: 'Libro no encontrado' });
    }
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { crearLibro, obtenerLibros, obtenerLibroPorId, actualizarLibro, eliminarLibro };
