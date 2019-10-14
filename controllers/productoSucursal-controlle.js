const productoSucursalController = {};
const productoSuc = require('../models/productoSucursal');




productoSucursalController.getProductosSuc = async (req , res)=> {
const prodSuc = await productoSuc.find()
    res.json(prodSuc);
 }


productoSucursalController.CreateProductoSuc = async (req , res)=> {
    let vars = req.body;
    const prodSucNew = new productoSuc ({
        name : req.body.name,
        desc : req.body.desc,
        productos: req.body.productos
    });
    await prodSucNew.save().then( data=>res.json({status:'ProductoSucursal Saved',data}) )
                .catch(data=>res.json({status:'Error saved',data})); 
}


productoSucursalController.EditProductoSuc = async (req , res)=> {
    const prodSucUpdate = {
        name : req.body.name,
        desc: req.body.desc,
        productos: req.body.productos
    };

   await productoSuc.findByIdAndUpdate(req.params.id, {$set: prodSucUpdate},{new: true}).then(data=>res.json({status: 'Error Updated ProductoSucursal',data}))
            .catch(data=>res.json({status: 'Success Updated ProductoSucursal'},data));
}

productoSucursalController.RemoveProductoSuc = async (req , res)=> {
   await productoSuc.findByIdAndRemove(req.params.id).then(data=>res.json({status: 'Producto Deleted ProductoSucursal', data})).catch(data=>res.json({status: 'Error Deleted ProductoSucursal',data}));
   /**  */
}

module.exports = productoSucursalController;