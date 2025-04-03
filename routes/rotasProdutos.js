const {Router} = require('express');

const {getProduto, addProduto, getProdutoPorCodigo, deleteProduto, updateProduto} = require('../controllers/produtosController');

const rotasProduto = new Router();

rotasProduto.route('/produto')
              .get(getProduto)
              .post(addProduto)
              .put(updateProduto)

rotasProduto.route('/produto/:codigo')
                .delete(deleteProduto)
                .get(getProdutoPorCodigo)

module.exports = { rotasProduto }