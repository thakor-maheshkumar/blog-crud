
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:text,
        required:true
    }
})
