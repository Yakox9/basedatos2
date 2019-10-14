const facturaController = {};
const factura = require('../models/factura');



facturaController.getFacturas = async (req , res)=> {
const fact = await factura.find()
    res.json(fact);
 }


facturaController.CreateFactura = async (req , res)=> {
    let vars = req.body;
    
    const factNew = new factura ({
        total: req.body.total,
        product: req.body.product,
        fecha: req.body.fecha
    });
    await factNew.save().then( data=>res.json({status:'Factura Saved',data,vars}) )
                .catch(data=>res.json({status:'Error saved',datos:data,cuerpo: vars})); 
}


facturaController.EditFactura = async (req , res)=> {
    const factUpdate = {
        
        total: req.body.total,
        product: req.body.product,
        fecha: req.body.fecha
    };

   await factura.findByIdAndUpdate(req.params.id, {$set: factUpdate},{new: true}).then(data=>res.json({status: 'Error Updated factura',data}))
            .catch(data=>res.json({status: 'Success Updated factura'},data));
}

facturaController.RemoveFactura = async (req , res)=> {
   await factura.findByIdAndRemove(req.params.id).then(data=>res.json({status: 'factura Deleted ', data})).catch(data=>res.json({status: 'Error Deleted factura',data}));
   /**  */
}

module.exports = facturaController;