const express = require('express');
//las rutas q luego se exportan
const router = express.Router();

//contiene todo lo q puedo hacer, crear, modificar, eliminar y editar producto
const sucursal = require('../controllers/sucursal-controller');

//esto se va a usar para enviar y recibir datos en JSON
router.get('/',sucursal.getSucursales);
router.post('/',sucursal.CreateSucursal);
router.get('/:id',sucursal.getSucursal);
router.put('/:id',sucursal.editSucursal);
router.delete('/:id',sucursal.RemoveSucursal);

module.exports = router;