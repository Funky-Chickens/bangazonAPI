'use strict';
let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
let routes = require('./routes/');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
    res.end({
        usage:"/bangazonAPI/v1/"
    })
})
app.use(`/bangazonAPI/v1/`, routes); //require in routes so it will look in index.js for the next step


//other middleware?

app.use((req, res, next)=>{
    let error = new Error('sorry, not found.');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status||500);
    res.json({
    message:"A problem occurred.",
	err:err
    })
});

app.listen(process.env.port || 8080, ()=>{
    console.log("Listening on port specified.");
});