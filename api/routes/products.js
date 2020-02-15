const express = require('express'); // app acts like a middleware
const router = express.Router(); //this allows us to register the product route


router.get('/',(req,res,next)=>{
    // get all
    res.status(200).json({
        message:'Handling GET request to /products'
    });
});

router.get('/:productId',(req,res,next)=>{
    // get by id
    const id = req.params.productId;
    if(id ==='special'){
        res.status(200).json({
            message:'you discovered the special ID',
            id:id
        });
    }else{
        res.status(200).json({
            message:'you passed an ID'
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
    // update
    res.status(200).json({
        message:'updated product',
    });
});

router.delete('/:productId',(req,res,next)=>{
    // deleted
    res.status(200).json({
        message:'deleted product',
    });
});

router.post('/',(req,res,next)=>{
    // req stands for request, res stands for responds, next stands for
    const product ={
        name:req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message:'Handling POST request to /products',
        createdProduct: product
    });
});

module.exports = router;