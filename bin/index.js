require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')

//routes
const analytics = require('./routes/analytics') //analytics
const contact_us = require('./routes/contact-us') //contact form
const contacts = require('./routes/contacts') // managing contacts; details and mail
const auth = require('./routes/auth') // athentication
const ssr = require('./routes/ssr') // serverside rendering
const files = require('./routes/search') //search database
const profile = require("./routes/profile") //user profile

//load in routes and cors
app.use(cors())
app.use(express.json())
app.use("/analytics", analytics)
app.use("/contact-us", contact_us)
app.use("/contacts", contacts)
app.use('/files', files)
app.use("/ssr", ssr)

/*
* endpoints  are
* POST :: /auth/login {returns jwt}
* POST :: /auth/sign-up { register user, return "successfully" added || "already exists"}
* POST :: /auth/reset {end token to user email for password reset}
*/app.use("/auth", auth);

/*
* endpoints  are
* POST :: /profile  {returns user account information}
* POST :: /profile/update { upate user account information with payload provided}
*/app.use("/profile", profile);



// create the connection test
app.get("/", (req, res) => {
    res.send("Ignition started")
})


app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
});
