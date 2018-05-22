

const express = require('express');


const app = express();
//environment variables
app.use(express.static(__dirname + '/dist'));
const port = 8450;
app.set('port', (port || 5050));

//For avoidong Heroku $PORT error
app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
