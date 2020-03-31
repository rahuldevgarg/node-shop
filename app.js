/*jshint esversion: 6 */
const express = require('express');
const app = express();

app.use('/demo',(req, res, next) => {
    res.status(200).json(
        {
            message:"It Works",
            txt : "Rahul Dev Garg"
        }
    );
});

module.exports = app;