const express = require('express');
const app = express();

//route handlers
app.get('/', function (req, res){
    res.send('Hello World');
})

//query parameters
//http://localhost:3000/add?a=10&b=20
app.get('/add', function (req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);

})

//path parameters
//http://localhost:3000/sub/10/20
app.get('/sub/:a/:b', function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sub = a - b;
    res.json({
        ans: sub
    })
})

app.get('/mul', function (req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const mul = a * b;
    res.send(`The mul of ${a} and ${b} is ${mul}`);
})

app.get('/div', function (req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const div = a / b;
    res.send(`The div of ${a} and ${b} is ${div}`);
})

//port
app.listen(3000);