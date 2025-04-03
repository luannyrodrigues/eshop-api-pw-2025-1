const { Router } = require('express');

const { rotasCategoria } = require('./rotasCategoria');
const { rotasProduto } = require('./rotasProdutos');


const rotas = new Router();

rotas.use(rotasCategoria);
rotas.use(rotasProduto)

module.exports = rotas;