const { Router } = require('express');
const routerCliente = Router();

const { getUsuario} = require('../controller/ctrUsuario.js');

routerCliente.post('/getUser',       getUsuario   );


module.exports = routerCliente;