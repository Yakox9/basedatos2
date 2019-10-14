const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSucursalSchema = new Schema ({
    name : { type: String, required: true, unique : true, uppercase :true },
    desc:{ type: String, required: true },
    productos: [{  id_producto: String, name: String,cantidad: Number}]
    })

// con esto creo la tabla producto de la DB y le envio el formarto de los datos
module.exports = mongoose.model('ProductoSucursal', productoSucursalSchema);

//ahoras la exporto
