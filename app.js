const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controller = require('./controller/Todo_Controller');
const app = express();
const port = 3000;

// setting ejs as our view engine
app.set('view engine','ejs');

// use every route to render these static files inside public folder
app.use(express.static('public'));

var Parser = bodyParser.urlencoded({extended:false});

// firing the imported function
controller(app,Parser,mongoose);

app.listen(port);
console.log(`listening to port ${port}`);

