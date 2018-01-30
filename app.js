const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds127894.mlab.com:27894/test-mobvalue', function (err) {
    if (err) {
        console.log('Failed to connect to mongo database ' + err);
    } else {
        console.log('connected to mongo database ');
    }

});
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,authorization');
    if (req.method == 'OPTIONS') {
        res.status(200).send("OPTIONS REQUESTS ARE NOT ALLOWED IN THIS SERVER, Please try another request...");
    } else {
        next();
    }
});



//Routing
const publicApi = require('./api/api.v1.public.js');
app.use('/api', publicApi);


// Api
app.set('port', '5000');
http.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

