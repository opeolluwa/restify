const express = require('express')
const router = express.Router()
const cors = require('cors')
const Contact = require('../model/class/contacts')
const database = require('../config/config.database')

database.connect(err => {
    if (err) console.error('error connecting: ' + err.stack);
    console.log('connected as id ' + database.threadId);
});


router.use(cors())
//default get all contacts
router.get('/', (req, res) => {
    //destructure request
    const { contact_email: email, contact_name: name, contact_phone: phone } = req.body

    const rx = new Contact();
    console.log(
        rx.email_exists(email)
    )
   return  res.send({ email, name, phone })

})

//Add contact
router.post("/add", (req, res) => {
    //init database trassaction

    const { email, name, phone } = req.body


    //check if user exist  contact
    const user = new Contact()
    user.email_exists(email)

    res.send({ message: "add contact", email, name, phone, user })

})


router.delete("/remove/:contact_email", (req, res) => {
    res.send({ message: "remove contact" })
})

//update contact
router.put("/update/:contact_email", (req, res) => {
    res.send({ message: "update contact" })
})
module.exports = router