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

    var result = client.getSecretValue();
    console.log("Secret nach Aufruf: "+ secret);
    
    const connection = mysql.createConnection({
        host: 'rfid-selfdefense.chekdlwyhdsh.eu-central-1.rds.amazonaws.com',
        user: 'admin',
        database: 'rfid-selfdefense',
        password: secret
    })

    console.log(connection);
    console.log("Connection Query Beginn!");
    const queryString = "SELECT * FROM User";
    connection.query(queryString, (err, rows, fields) => {
        console.log("IN QUERY!");
        if (err) {
            console.log("Failed to query for users: " + err);
            res.end()
            return
        }
        console.log("Users fetched successfully!");
        console.log(rows);
        // res.render('welcome', { clients: rows });
    }) 


/*connection.query("UPDATE user set Vorname = ?, Nachname = ?, Email = ?, Geburtsdatum = ?, Geburtsort = ?, Nationalitaet = ?, Beruf = ?, Strasse = ?, Plz = ?, Telefon = ?  where ChipID =  ?", [vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon,chip_id]), (err, rows, fields) => {
    if (err) {
        console.log("Failed to Update " + err);
        connection.end()
        return
    }
    console.log("User updated successfully!");
    connection.end();
} */
}

client.getSecretValue({SecretId: secretName}, function(err, data) {
    console.log("CLIENT VERBINDUNG");
    console.log("SERET NAME");
    console.log(secretName);
    if (err) {
        console.log("IM IF");
        throw err;
       /* if (err.code === 'DecryptionFailureException')
            // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InternalServiceErrorException')
            // An error occurred on the server side.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InvalidParameterException')
            // You provided an invalid value for a parameter.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InvalidRequestException')
            // You provided a parameter value that is not valid for the current state of the resource.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'ResourceNotFoundException')
        
            // We can't find the resource that you asked for.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;*/
    }
    else {
        // Decrypts secret using the associated KMS CMK.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        if ('SecretString' in data) {
            secret = data.SecretString;
            console.log(secret);
        } else {
            console.log("DECODED WIRD GESETZT");

            let buff = new Buffer(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
        }
    }
});  

exports.printX = function () {
    console.log("X")
};