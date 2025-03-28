const { Router } = require('express');

const { rotasCategoria } = require('./rotasCategoria');

const rotas = new Router();

rotas.use(rotasCategoria);

module.exports = rotas;