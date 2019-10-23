var express = require('express');
var router = express.Router();
const myModule = require('../model/client-model');


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
    


    myModule.updateUser(chip_id,vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon);

    res.redirect('/v0');
});

module.exports = router;