const express = require ('express');
const zod = require ('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());


app.post('/healthCheckup', function(req, res){
    const kidneys = req.body?.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(400).json({
            msg: "Something wrong with your input"
        });
    }else{
        res.send({
            response
        });
    }
});

app.listen(3000);


/*
//sample zod code
const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5),
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

// validateInput({
//     email: "ayushman@gmail.com",
//     password: "1234567"
// });

app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            msg: "Something wrong with your input"
        })
        return;
    }
})
*/





