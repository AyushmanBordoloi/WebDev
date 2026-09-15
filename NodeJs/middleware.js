const express = require('express');
const app = express();

//INPUT VALIDATION WITHOUT USING MIDDLEWARE (not used)
//violates the DRY rule of coding, as if another route is introduced in the code, the entire validation checks have to be repeated
app.get('/healthCheckup', function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const patientId = req.query.patientId;

    //validation check 1
    if(username != "ayushman" || password != "1234567"){
        res.status(400).json({
            msg: "User dosen't exits"
        })
        return;
    }

    //validation check 2
    if(patientId != 1 && patientId != 2){
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