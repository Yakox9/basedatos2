const express = require('express');
const router = express.Router();

const factura = require('../controllers/factura-controller');

router.get( '/', factura.getFacturas);
router.post( '/', factura.CreateFactura);
router.get( '/:id', factura.getFacturas);
router.put('/:id',factura.EditFactura);
router.delete('/:id',factura.RemoveFactura);

module.exports= router;