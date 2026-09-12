const express = require('express');
const app = express();
app.use(express.json());

//route handlers
app.get('/', function (req, res){
    res.sendFile("/Users/ayushmanbordoloi/Desktop/WebDev/Projects/to-do-app/index.html");
})

app.post('/add', function (req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const add = a + b;
    res.json({
        ans: add
    })
})

app.post('/sub', function (req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sub = a - b;
    res.json({
        ans: sub
    })
})

app.post('/mul', function (req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const mul = a * b;
    res.json({
        ans: mul
    })
})

//An example for path params
//http://localhost:3000/div/20/10
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