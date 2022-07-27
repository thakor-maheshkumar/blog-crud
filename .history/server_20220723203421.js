const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const dbConfig =require('./config/database');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
const app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000,()=>{
    console.log("Port listned on port 300")
})

var BlogRouter = require('./app/routes/blog');
app.use('/blog',BlogRouter);