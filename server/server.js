console.log('Hey there');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let calculations = [];

// Addition requests

app.post('/addition', function(req, res){
    console.log(req.body);
    calculations.push(req.body);
    res.sendStatus(200);
    console.log(calculations);
});

app.get('/get-addition', function(req, res){
    res.send(calculations);
    console.log(calculations);
})

// Subtraction requests

app.post('/subtraction', function(req, res){
    calculations.push(req.body);
    res.sendStatus(200);
    console.log(calculations);
})

app.get('/get-subtraction', function(req, res){
    res.send(calculations);
})


// LISTENING
app.listen(PORT, function (){ 
    console.log(`listening to port, ${PORT}`)
});
