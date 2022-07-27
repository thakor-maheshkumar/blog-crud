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



exports.update = async (req,res)=>{
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    var id = req.params.id;
    await BlogModel.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
 }