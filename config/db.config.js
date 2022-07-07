const mysql = require('mysql');
const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'carselonadaily_test_db'
});

databaseConnection.connect(function (err) {
    if (err) console.error(err);
    console.log("Database Connected!");
});
module.exports = databaseConnection;