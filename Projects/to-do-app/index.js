const express = require('express');
const app = express();

//route handlers
app.get('/', function (req, res){
    res.sendFile("/Users/ayushmanbordoloi/Desktop/WebDev/Projects/to-do-app/index.html");
})

//path parameters
//http://localhost:3000/add/10/20
app.get('/add/:a/:b', function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const add = a + b;
    res.json({
        ans: add
    })
})

app.get('/sub/:a/:b', function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sub = a - b;
    res.json({
        ans: sub
    })
})

app.get('/mul/:a/:b', function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const mul = a * b;
    res.json({
        ans: mul
    })
})

app.get('/div/:a/:b', function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const div = a / b;
    res.json({
        ans: div
    })
})

//port
app.listen(3000);