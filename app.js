/*jshint esversion: 6 */
const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
app.use('/demo',(req, res, next) => {
    res.status(200).json(
        {
            message:"You are viewing demo.",
            author : "Rahul Dev Garg"
        }
    );
});
app.use('/products',productRoutes);

module.exports = app;