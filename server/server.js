console.log('Hey there');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const Calculations = require('./modules/calculations');
const NewCalculation = new Calculations();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

// Requests
app.get('/get', function (req, res) {
    res.send(NewCalculation.history);
    console.log(NewCalculation.history);
})

app.post('/post', function (req, res) {
    NewCalculation.x = req.body.x;
    NewCalculation.y = req.body.y;
    NewCalculation.type = req.body.type;
    // NewCalculation.history.push(req.body);
    NewCalculation.operations();
    res.sendStatus(200);
});


// Subtraction requests
// app.post('/subtraction', function (req, res) {
//     console.log(req.body)
//     Calculations.push(req.body);
//     res.sendStatus(200);
// })

// app.get('/get-subtraction', function (req, res) {
//     res.send(Calculations);
//     console.log(Calculations);
// })

// LISTENING
app.listen(PORT, function () {
    console.log(`listening to port, ${PORT}`)
});
