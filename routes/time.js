var express = require('express');
var router = express.Router();
const myModule = require('../model/client-model');
const mysql = require('mysql');
const mysqlConnection = require("../connection");



router.get('/time', function(req, res, next) {

    const queryString = "SELECT * FROM time ORDER BY checkIn DESC";
    mysqlConnection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for time: " + err);
            res.end()
            return
        }
        console.log("Time fetched successfully");
        res.render('time', { times: rows });
    }) 
});

module.exports = router;