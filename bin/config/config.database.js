require('dotenv').config()
const mysql = require('mysql2');

//create database connection
const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_ACCESS_KEY,
    database: process.env.DB_SCHEMA
})


//init database trasaction
database.connect(err => {
    if (err) console.error('error connecting: ' + err.stack);
    console.log('connected as id ' + database.threadId);
});


module.exports = database ;