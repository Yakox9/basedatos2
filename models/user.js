const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    
    username: {type: String, requerid:true, unique : true},
    name: {type:String, required:true,  unique : true},
    pass : {type: String, required: true},
    type: {type: Boolean, requerid:true},
    desc:{type: String}
});

module.exports = mongoose.model('User', userSchema );