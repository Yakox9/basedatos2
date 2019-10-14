const sucursalController = {};
// con esto puedo hacer consultas a la base de datos pues es el modelo
const Sucursal = require('../models/sucursal');

//obtiene todos los productos
sucursalController.getSucursales = async (req , res)=> {
    const sucursal = await Sucursal.find()
    res.json(sucursal);
 }

//crea un producto
sucursalController.CreateSucursal = async (req , res)=> {
    //console.log(req.body);
    const sucursal = new Sucursal (req.body);
    await sucursal.save();
    res.json('sucursal creada');
    
}

//obtiene un solo producto con un id
sucursalController.getSucursal = async (req , res)=> {
    const sucursal = await Sucursal.findById(req.params.id);
    res.json(sucursal);
}

//editar producto
sucursalController.editSucursal = async (req , res)=> {
    const sucursalUpdate = {
        name : req.body.name,
        descripcion : req.body.descripcion

    }
   const sucursal = await Sucursal.findByIdAndUpdate(req.params.id, {$set: sucursalUpdate},{new: true});
   res.json({status: 'sucursal updated'}); 
}
//eliminar producto
sucursalController.RemoveSucursal = async (req , res)=> {
    await Sucursal.findByIdAndRemove(req.params.id);
    res.json({status: 'sucursal deleted'}); 
}

module.exports = sucursalController;