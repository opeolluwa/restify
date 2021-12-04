const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()
const database = require("./../config/config.database")


router.use(cors())

//default get all skills
router.get('/', (req, res) => {
    database.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + database.threadId);
    });


    database.query("SELECT * FROM skills", (err, rows) => {
        if (err) return res.json({ rows: null, errors: err.message, })
        else return res.json({ rows, errors: null })
    })
})

//Add skill
router.post("/add", (req, res)=>{
    res.send({message: "add skill"})
})


router.delete("/remove", (req, res)=>{
    res.send({message: "remove skill"})
})

//update skill
router.put("/update", (req, res)=>{
    res.send({message: "update skill"})
})
module.exports = router