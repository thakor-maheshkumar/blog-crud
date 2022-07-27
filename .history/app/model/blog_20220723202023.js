
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

var blog =new mongoose.model('Blog',schema);

module.exports=blog;