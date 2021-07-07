const express = require('express');
const app = express();
const router  = require('../routes/index');
const elastic = require('./elastic');
const path = require('path');

elastic.checkIndex();

app.use(express.static(path.join(__dirname, '../../public'))); 
app.set('view engine', 'ejs');
app.use('/', router);
app.get('/', function (req, res) {
    res.render('index',{title:'Sample'});
});

module.exports = app;
