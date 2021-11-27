const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()
const database = require("./../config/config.database")


router.use(cors())

//default get all contacts
router.get('/', (req, res) => {
    database.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + database.threadId);
    });


    database.query("SELECT * FROM contacts", (err, rows) => {
        if (err) return res.json({ rows: null, errors: err.message, })
        else return res.json({ rows, errors: null })
    })
})

//Add contact
router.post("/add", (req, res) => {
    res.send({ message: "add contact" })
})


router.delete("/remove/:contact_email", (req, res) => {
    res.send({ message: "remove contact" })
})

//update contact
router.put("/update/:contact_email", (req, res) => {
    res.send({ message: "update contact" })
})
module.exports = router