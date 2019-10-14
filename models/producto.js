const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema ({
    name : { type: String, required: true,   uppercase :true },
    price : { type: Number, required: true},
    desc : { type: String, required: true ,unique : true,  uppercase :true},
    type : { type: Boolean, required: true }
})

// con esto creo la tabla producto de la DB y le envio el formarto de los datos
module.exports = mongoose.model('Producto', productoSchema);

//ahoras la exporto
