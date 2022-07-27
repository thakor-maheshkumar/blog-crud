var express = require('express');
var router =express.Router();
var BlogController =require('../controllers/Blog');
router.post('/',BlogController.create);

module.exports=router;