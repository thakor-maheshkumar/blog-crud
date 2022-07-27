const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log("Port listned on port 300")
})