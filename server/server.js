console.log('Hey there');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    console.log('yep it worked');
    res.send('hey there');
})


app.listen(PORT, function (){ 
    console.log(`listening to port, ${PORT}`)
});