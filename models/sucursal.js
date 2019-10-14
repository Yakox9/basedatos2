const mongoose = require('mongoose');
const {Schema} = mongoose;

const sucursalSchema = new Schema ({
    name : { type: String, required: true },
    descripcion : { type: String, required: true }
})

// con esto creo la tabla producto de la DB y le envio el formarto de los datos
module.exports = mongoose.model('Sucursal', sucursalSchema);


//ahoras la exporto