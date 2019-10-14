const mongoose = require('mongoose');
const {Schema} = mongoose;

const facturaSchema = new Schema ({
    
    
    total:{ type: Number , required: true},
    product: [{  id_prod: String,  cantidad: Number , precio: Number}],
    fecha: { type: Date , default: Date.now() ,required: true }
    })

    
module.exports = mongoose.model('Factura', facturaSchema);


