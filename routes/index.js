var express = require('express');
var router = express.Router();
const serverless = require("serverless-http");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = router;