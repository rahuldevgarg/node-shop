/*jshint esversion: 6*/ 
const express = require('express');
const router = express.Router();

// Handle incoming GET requests
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Ordered were fetched'
    });
});

router.post('/',(req,res,next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message:'Order created',
        order: order
    });
});

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Order Details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Order deleted',
        orderId: req.params.orderId
    });
});


module.exports = router;