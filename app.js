var express = require('express');
var  MongoClient = require('mongodb');
const bodyParser = require('body-parser');
const db = require('./config/db')

var app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}))

// importing routes into app.js


MongoClient.connect(db.url, (err, database) => {
    if (err)  return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('Hello world on' + ' ' + port);
    })
})
