var express = require('express');
var router =express.Router();
var BlogController =require('../controllers/Blog');
router.post('/',BlogController.create);
router.get('/:id',BlogController.findOne);
router.get('/',BlogController.findAll);
module.exports=router;