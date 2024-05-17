const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/ctrUsuario');

router.post('/getUser', userCtrl.getUser);
router.get('/getPedido', userCtrl.getPedido);

module.exports = router;

