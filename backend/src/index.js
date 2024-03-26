const express = require('express');
const cors = require('cors');

const routerUsuario = require('./router/user');


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes

//Usuarios
app.use('/usuario', routerUsuario);



app.listen(3000);
console.log('Server on port', 3000);