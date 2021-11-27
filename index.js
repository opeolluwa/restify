require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const cors = require('cors')


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
// app.use("/auth", auth)


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});
