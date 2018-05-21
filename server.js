require('dotenv').config();

const express = require('express');
const axios = require('axios');
const async = require('async');
const app = express();
//environment variables
app.use(express.static(__dirname + '/dist'));
app.set('port', (8080));

//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
