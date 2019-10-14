const express = require('express');
//las rutas q luego se exportan
const router = express.Router();

//contiene todo lo q puedo hacer, crear, modificar, eliminar y editar producto
const producto = require('../controllers/producto-controller');

//esto se va a usar para enviar y recibir datos en JSON
router.get('/',producto.getProductos);
router.post('/',producto.CreateProducto);
//router.get('/:id',producto.getProducto);
router.put('/:id',producto.EditProducto);
router.delete('/:id',producto.RemoveProducto);

module.exports = router;