var BlogModel = require('../model/blog');

exports.create = async(req,res)=>{
    console.log(req.body);
    if(!req.body.name && !req.body.description){
        res.status(200).send({
            message:'Content can not be empty'
        });
    };
    var blog =  new BlogModel({
        name:req.body.name,
        description:req.body.description
    });

     await blog.save().then(data=>{
        res.status(200).send({
            message:"Blog Created successfully",
            blog:data
        });
     });
    };
     exports.findOne = async (req,res)=>{
        try {
            var blog =await BlogModel.findById(req.params.id);
            res.status(200).json(blog);
        }catch(err){
            res.status(400).json({message:err.message})
        }
     };
    
     exports.findAll = async (req,res)=>{
        try {
            var blog =await BlogModel.find();
            res.status(200).json(blog);
        }catch(err){
            res.status(400).json({message:err.message})
        }
     };

     exports.update = async (req,res)=>{
        if(!req.body) {
            res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }
        var id = req.params.id;
        await BlogModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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