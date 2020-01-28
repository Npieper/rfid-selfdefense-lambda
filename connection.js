const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rfid-selfdefense.chekdlwyhdsh.eu-central-1.rds.amazonaws.com',
    user: 'admin',
    database: 'rfid-selfdefense',
    port: '3306',
    password: ".,ejn-X(qTbh%$BE",
    dateStrings: true
})

con.connect((err) => {
    if(!err) {
        console.log("Connected");
    } else {
        console.log("Connection failed");
        console.log(err);
    }  
})

module.exports = con;