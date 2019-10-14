const express = require('express');
const router = express.Router();

const userCt = require('../controllers/productoSucursal-controlle');

router.get( '/', userCt.getProductosSuc);
router.post( '/', userCt.CreateProductoSuc);
router.get( '/:id', userCt.getProductosSuc);
router.put('/:id',userCt.EditProductoSuc);
router.delete('/:id',userCt.RemoveProductoSuc);

module.exports= router;