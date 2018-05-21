require('dotenv').config();

const express = require('express');


const app = express();
//environment variables
app.use(express.static(__dirname + '/dist'));
app.set('port', (8080));

//For avoidong Heroku $PORT error
app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
