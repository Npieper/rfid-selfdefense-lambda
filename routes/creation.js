var express = require('express');
var router = express.Router();


router.get('/creation', function(req, res, next) {
    res.render('create-user');
});

module.exports = router;