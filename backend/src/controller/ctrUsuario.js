const getUsuario = async (req, res) => {
    try {
      console.log("Controlador ejecutado correctamente");
      // Aquí va la lógica para obtener el usuario
      // Por ahora, solo responderemos con un mensaje
      res.json({ message: 'Aquí se ejecutará la lógica para obtener un usuario' });
    } catch (error) {
      console.error('Error en el controlador getUsuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  module.exports = { getUsuario };
  