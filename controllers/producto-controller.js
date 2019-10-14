const productoController = {};
// con esto puedo hacer consultas a la base de datos pues es el modelo
const producto = require('../models/producto');

//obtiene todos los productos
productoController.getProductos = async (req , res)=> {
    const productos = await producto.find();
    res.json(productos);
 }

//crea un producto
productoController.CreateProducto = async (req , res)=> {
    const productoNew = new producto ({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc, 
        type: req.body.type
    });
    await productoNew.save().then(data=> res.json({status:true}) ) .catch(data=> res.json({status:false}))  ;
   
    
}

//obtiene un solo producto con un id
productoController.getProducto = async (req , res)=> {
    const product = await producto.findById(req.params.id);
    res.json(product);
}

//editar producto
productoController.EditProducto = async (req , res)=> {
    const productUpdate = {
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        type : req.body.type

    }
   const product = await producto.findByIdAndUpdate(req.params.id, {$set: productUpdate},{new: true});
   
   if(product===null){
    res.json({status: 'Error Updated',product});
   }else{
    res.json({status: 'Success Updated',product})
   }
}
//eliminar producto
productoController.RemoveProducto = async (req , res)=> {
    await producto.findByIdAndRemove(req.params.id).then(()=>res.json({status: 'Producto Deleted'})).catch(()=>res.json({status: 'Error Deleted'}));
    //res.json({status: 'Producto Deleted'}); 
}



productoController.filtrarTipoProducto = async(req, res)=>{
    const productos=req.params.type;
    await producto.find({type: req.params.type}).then(data=>res.json({status: 'Productos tipo',data,productos}))
    .catch(data=>res.json({status: 'Error ',data,productos}));
}

module.exports = productoController;