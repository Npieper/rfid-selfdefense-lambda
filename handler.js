
const serverless = require("serverless-http");
const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var indexRouter = require('./routes/index');
var creationRouter = require('./routes/creation');

app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/', creationRouter);


module.exports.rfidSelfdefense= serverless(app);