const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()
const database = require("./../config/config.database")


router.use(cors())

//default get all projects
router.get('/', (req, res) => {
    database.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + database.threadId);
    });


    database.query("SELECT * FROM project", (err, rows) => {
        if (err) return res.json({ rows: null, errors: err.message, })
        else return res.json({ rows, errors: null })
    })
})

//Add project
router.post("/add", (req, res) => {
    res.send({ message: "add project" })
})


router.delete("/remove/:project_name", (req, res) => {
    res.send({ message: "remove project" })
})

//update project
router.put("/update/:project_name", (req, res) => {
    res.send({ message: "update project" })
})
module.exports = router