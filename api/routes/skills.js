const express = require('express')
const router = express.Router()
const cors = require('cors')
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_SCHEMA,
    password: process.env.DB_PASS
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()


require('dotenv').config()
router.use(cors())

router.get("/all", (req, res))
