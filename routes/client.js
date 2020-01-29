var express = require('express');
var router = express.Router();
const myModule = require('../model/client-model');
const mysql = require('mysql');
const mysqlConnection = require("../connection");



router.get('/client', function(req, res, next) {

    const queryString = "SELECT * FROM User";
    mysqlConnection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.end()
            return
        }
        console.log("Users fetched successfully!");
        res.render('welcome', { clients: rows });
    }) 
});

router.post('/client', function(req, res, next) {
   
    var chip_id = req.body.chipID;
    var vorname = req.body.vorname;
    var nachname = req.body.nachname;
    var email = req.body.email;
    var geburtsdatum = req.body.geburtsdatum;
    var geburtsort = req.body.geburtsort;
    var nationalitaet = req.body.nationalitaet;
    var beruf = req.body.beruf;
    var strasse = req.body.strasse;
    var plz = req.body.plz;
    var telefon = req.body.telefon;
    
        /*Select all customers with the address "Park Lane 38":*/
        /*con.query("SELECT * FROM User", function (err, result) {
            console.log("query");
          if (err) throw err;
          console.log(result);
        });*/

       
        mysqlConnection.query("UPDATE user set vorname = ?, nachname = ?, email = ?, geburtsdatum = ?, geburtsort = ?, nationalitaet = ?, beruf = ?, strasse = ?, plz = ?, telefon = ?  where chipID =  ?", [vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon,chip_id]), (err, rows, fields) => {
          console.log("Trying to update.");
           if (err) {
            console.log("Failed to Update " + err);
            }
            console.log("User updated successfully!");
            res.redirect('/v0');

        } 

        res.redirect('/v0');
       
      });

module.exports = router;