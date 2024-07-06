const mongoose=require ('mongoose');
const { type } = require('os');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','hr','manager','employee'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;