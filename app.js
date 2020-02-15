const express = require('express');
const app = express(); // app acts like a middleware
const morgan = require('morgan')
const bodyParser = require('body-parser')

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev')) //logger middleWare
app.use(bodyParser.urlencoded({extended:false}));// post bodyparser middleWare
app.use(bodyParser.json());
//Routes which should handle requests

app.use('/products',productRoutes); // anything /products will be forwarded to this productRoutes
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
   res.status(error.status||500);
   res.json({
       error:{
           message:error.message
       }
   })
})
module.exports = app;



// app.use((req,res,next)=>{
//     // req stands for request, res stands for responds, next stands for
//     res.status(200).json({
//         message:'Hello World!'
//     });
// });
// yarn add --dev nodemon 
// nodemon restarts the server automatically for anytime there is change in file
// yarn add morgan 
// morgan is a middleware that logs data
//yarn add body-parser
// body-parser is use to parser the body of an in comming request

