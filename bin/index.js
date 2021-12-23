require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')

//routes
const analytics = require('./routes/analytics')
// const skills = require('./routes/skills')
const mails = require('./routes/mails')
// const projects = require('./routes/projects')
const contacts = require('./routes/contacts')
const auth = require('./routes/auth')
const ssr = require('./routes/ssr')


//load in routes and cors
app.use(cors())
app.use(express.json())
app.use("/analytics", analytics)
app.use("/mails", mails)
app.use("/contacts", contacts)
app.use("/auth", auth)
app.use("/ssr", ssr)

// create the connection test
app.get("/", (req, res) => {
    res.send("Ignition started")
})


app.listen(PORT, () => {
    console.log(`Templatico API listening on port ${PORT}`)
});
