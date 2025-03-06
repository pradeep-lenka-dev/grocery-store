const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name :string ,
    email :{type:string,unique:true},
    password : string,
    role:{type:string, enum:['admin','cashier'],default:'cashier'}
});

module.exports =  mongoose.model("User",userSchema);
