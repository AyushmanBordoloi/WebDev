/*
const express = require('express');
const app = express();

//INPUT VALIDATION WITHOUT USING MIDDLEWARE (not used)
//violates the DRY rule of coding, as if another route is introduced in the code, the entire validation checks have to be repeated
app.get('/healthCheckup', function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    //validation check 1
    if(username != "ayushman" || password != "1234567"){
        res.status(400).json({
            msg: "User dosen't exits"
        })
        return;
    }

    //validation check 2
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "Something wrong with your input"
        })
        return;
    }

    res.json({
        msg: "your health is fine",
    })
});

app.put('/replaceKidney', function (req, res){    //new route created but the entire code is repeating
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    //same validation check 1
    if(username != "ayushman" || password != "1234567"){
        res.status(400).json({
            msg: "User dosen't exits"
        })
        return;
    }

    //same validation check 2
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "Something wrong with your input"
        })
        return;
    }

    res.json({
        msg: "your health is fine",
    })
});

app.listen(3000);
*/

//USE OF MIDDLEWARE
const express = require ('express');
const app = express();
app.use(express.json()); //.use means this middleware is going to be called everywhere from the next function onwards (does not include its preceeding functions)
//i.e. any routes that are coming after this will have this middleware added

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "ayushman" && password != "1234567"){
        res.status(400).json({
            msg: "User dosen't exists"
        });
    }else{
        next();
    }
};

function kidneyIdMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 || kidneyId !=2){
        res.status(400).json({
            msg: "Something wrong with your input"
        });
    }else{
        next();
    }
};

app.get('/healthCheckup', userMiddleware, kidneyIdMiddleware, function (req, res){  //can put a range of callback functions not only one. in this case cb1(userMiddleware), cb2(kidneyIdMiddleware), cb3(function)
    //do some health check
    res.json({
        msg: "Your health is fine",
    })
});

app.put('/replaceKidney', userMiddleware, kidneyIdMiddleware, function (req, res){
    //replace kidney if required
    res.json({
        msg: "Your kidney is fine",
    })
});

app.get('/heartCheck', userMiddleware, function (req, res){
    //do heart check
    res.json({
        msg: "Your heart is fine",
    })
});

app.listen(3000);