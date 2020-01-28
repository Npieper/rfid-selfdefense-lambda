var express = require('express');
var router = express.Router();
const myModule = require('../model/client-model');
const mysql = require('mysql');
const mysqlConnection = require("../connection");



router.get('/time', function(req, res, next) {
    const queryString = "SELECT * FROM time t JOIN user u ON t.userId = u.chipId ORDER BY checkIn DESC";
    mysqlConnection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for time: " + err);
            res.end()
            return
        }
        console.log("Time fetched successfully");
        console.log(rows);
        for (i = 0; i < rows.length; i++) {
            transformedDate = convertDateTime(rows[i].checkIn);
            rows[i].checkIn = transformedDate; 
          }
        res.render('time', { times: rows });
    }) 
});

function convertDateTime(dateToTransform) {
    var dateParts = dateToTransform.split('-');
    var timeSplit = dateParts[2].split(' ');
    var transformedDate = timeSplit[0] + "." + dateParts[1] + "." + dateParts[0] + " " + timeSplit[1];
    return transformedDate;
}

module.exports = router;