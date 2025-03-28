const { Router } = require('express');

const { getCategoria, addCategoria, updateCategoria, 
    deleteCategoria, getCategoriaPorCodigo } = require('../controllers/categoriaController');

const rotasCategoria = new Router();

rotasCategoria.route('/categoria')
              .get(getCategoria)
              .post(addCategoria)
              .put(updateCategoria)

rotasCategoria.route('/categoria/:codigo')
                .delete(deleteCategoria)
                .get(getCategoriaPorCodigo)

module.exports = { rotasCategoria }