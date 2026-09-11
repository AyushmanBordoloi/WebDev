const express = require('express');
const app = express();

//route handlers
app.get('/', function (req, res){
    res.send('Hello World');
})

app.post('/', function (req, res){
    res.send('Got a POST request');
})

app.get('/about', function (req, res){
    res.send('About Page');
})

//port
app.listen(3000);