var express = require('express');
var router = express.Router();
const controller = require('../controllers/categoriasControllers')


router.get('/:cat',controller.categorias);

module.exports = router