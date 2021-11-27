require('dotenv').config()
const mysql = require('mysql2');


const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_ACCESS_KEY,
    database: process.env.DB_SCHEMA
})


module.exports = database ;