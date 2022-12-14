const mongoose  = require('mongoose');
const uniqueValidator  =   require('mongoose-unique-validator');
const schema   = new mongoose.Schema({
    name :{
        type :String ,
        required: true 
    },
    email : {
        type :String ,
        required: true,
        unique: true  
    }
})

schema.plugin(uniqueValidator , { message : 'Email should be unique'})
const model  = mongoose.model( 'users', schema);
module.exports  = model;
