var express = require('express');
var router = express.Router();
const mysql = require('mysql');


// Load the AWS SDK
var AWS = require('aws-sdk'),
    region = "eu-central-1",
    secretName = "prod/rfid-selfdefense-database",
    secret,
    decodedBinarySecret;


    var client = new AWS.SecretsManager({
        region: region
    });

exports.updateUser = function(chip_id,vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon) {

    //var result = client.getSecretValue();
    //console.log("Secret nach Aufruf: "+ secret);
    
    return new Promise(function(resolve, reject) {

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
        if (err) return reject(err);

          
    con.query("UPDATE User set Vorname = ?, Nachname = ?, Email = ?, Geburtsdatum = ?, Geburtsort = ?, Nationalitaet = ?, Beruf = ?, Strasse = ?, Plz = ?, Telefon = ?  where ChipID =  ?", [vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon,chip_id]), 
    function (err, rows, fields) {
      console.log("Trying to update.");
       if (err) {
        console.log("Failed to Update " + err);
        reject(err);
        }
        console.log("User updated successfully!");
        resolve("Bubblegum!");
    } 
   

})

    });

};
