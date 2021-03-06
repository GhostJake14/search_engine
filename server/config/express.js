const express = require('express');
const app = express();
const {elastic,client} = require('../config/elastic');
const path = require('path');
const api = require('../routes/index');

elastic.checkIndex();

app.use(express.static(path.join(__dirname, '../../public')));
app.set('view engine', 'ejs');
app.use('/api', api)
app.get('/', function (req, res) {
    res.render('index');
});

module.exports = app;