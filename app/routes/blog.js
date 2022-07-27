var express = require('express');
var router =express.Router();
var BlogController =require('../controllers/Blog');
router.post('/add-blog',BlogController.create);
router.get('/read-blog/:id',BlogController.findOne);
router.get('/',BlogController.findAll);
router.put('/update-blog/:id',BlogController.update);
router.delete('/delete-blog/:id',BlogController.destroy);
module.exports=router;