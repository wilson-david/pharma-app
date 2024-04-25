// // server.js
// const express = require('express');
// const cors = require('cors');
// const routerUsuario = require('./router/user');

// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// // Rutas
// app.use('/usuario', routerUsuario);

// // Iniciar el servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Conectar las rutas
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});

module.exports = app;
