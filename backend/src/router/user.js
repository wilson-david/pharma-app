// express = require('express');
// const router = express.Router();

// // Ruta para obtener un usuario
// router.get('/getUser', (req, res) => {

//     console.log("entro en el router");

//   res.json({ message: 'Aquí se ejecutará la lógica para obtener un usuario' });
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const { getUsuario } = require('../controller/ctrUsuario.js');

// Ruta para obtener un usuario (POST request)
router.post('/getUser', async (req, res) => {
  try {
    console.log("Entrando en la ruta /getUser"); // Mensaje de registro para verificar que la ruta está siendo alcanzada
    const resultado = await getUsuario(req, res);
    res.json(resultado);
  } catch (error) {
    console.error('Error en la ruta /getUser:', error); // Registro de cualquier error que pueda ocurrir
    res.status(500).json({ message: 'Error interno del servidor' }); // Devolución de un mensaje de error al cliente
  }
});

module.exports = router;

