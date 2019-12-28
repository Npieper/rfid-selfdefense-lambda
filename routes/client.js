var express = require('express');
var router = express.Router();
const myModule = require('../model/client-model');
const mysql = require('mysql');


router.get('/client', function(req, res, next) {
/*
    const connection = mysql.createConnection({
        host: 'us-cdbr-iron-east-02.cleardb.net',
        user: 'b525fb3beb7abe',
        database: 'heroku_f88e5c34407b619',
        password: '431db98c'
    })
*/

    /*const queryString = "SELECT * FROM user";
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.end()
            return
        }
        console.log("Users fetched successfully!");
        res.render('welcome', { clients: rows });
    }) */
    res.redirect('/v0');

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
    
    console.log(chip_id);
    console.log(nachname);
    console.log(vorname);
    console.log(email);
    console.log(geburtsdatum);
    console.log(geburtsort);
    console.log(nationalitaet);
    console.log(beruf);
    console.log(strasse);
    console.log(plz);
    console.log(telefon);


    const con = mysql.createConnection({
        host: 'rfid-selfdefense.chekdlwyhdsh.eu-central-1.rds.amazonaws.com',
        user: 'admin',
        database: 'rfid-selfdefense',
        port: '3306',
        password: ".,ejn-X(qTbh%$BE"
    })

    console.log("Connection created.");

    const sql = "SELECT * FROM User";
    con.connect(function(err) {
        console.log(con);
        console.log("connected");
        if (err) throw err;

          
    con.query("UPDATE User set Vorname = ?, Nachname = ?, Email = ?, Geburtsdatum = ?, Geburtsort = ?, Nationalitaet = ?, Beruf = ?, Strasse = ?, Plz = ?, Telefon = ?  where ChipID =  ?", [vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon,chip_id]), (err, rows, fields) => {
      console.log("Trying to update.");
       if (err) {
        console.log("Failed to Update " + err);
        con.end()
        return
        }
        console.log("User updated successfully!");
        con.end();
    } 
        /*Select all customers with the address "Park Lane 38":*/
        /*con.query("SELECT * FROM User", function (err, result) {
            console.log("query");
          if (err) throw err;
          console.log(result);
        });*/
        res.redirect('/v0');

      });


    //myModule.updateUser(chip_id,vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon);

});

module.exports = router;