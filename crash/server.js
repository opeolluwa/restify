require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')
const database = require('./config/config.database')
const mysql = require('mysql2');

const skills = require('./routes/skills')
const mails = require('./routes/mails')
const projects = require('./routes/projects')
const contacts = require('./routes/contacts')
const auth = require('./routes/auth')



app.use(cors())
app.use(express.json())
app.use("/skills", skills)
app.use("/mails", mails)
app.use("/projects", projects)
app.use("/contacts", contacts)
app.use("/auth", auth)

app.get('/tt', (req, res) => {
    //init database trasaction
    database.connect(err => {
        if (err) console.error('error connecting: ' + err.stack);
        console.log('connected as id ' + database.threadId);
    });

    database.query("SELECT * FROM contacts", (err, result) => {
        if (err) res.send(err.message)
        else res.send(result.length === 0); //return true or false 
    })

    res.send(`Templatico server listening on port ${PORT}`)

})






app.get("/", (req, res) => {
    // create the connection
    const con = mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_ACCESS_KEY,
            database: process.env.DB_SCHEMA
        }
    );

    con.promise().query("SELECT * FROM contacts")
        .then(([rows, fields]) => {
            console.log(rows);
        })
        .catch(console.log)
        .then(() => con.end());
})






app.listen(PORT, () => {
    console.log(`Templatico API listening on port ${PORT}`)

});
