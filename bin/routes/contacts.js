const express = require('express')
const router = express.Router()
const cors = require('cors')
const { add_contact } = require('../controllers/contacts')



router.use(cors())
//default get all contacts
router.get('/', (req, res) => {
    //destructure request
    const { contact_email: email, contact_name: name, contact_phone: phone } = req.body

    const rx = new Contact();
    console.log(
        rx.email_exists(email)
    )
    return res.send({ email, name, phone })

})

//Add contact
router.post("/add", add_contact)


router.delete("/remove/:contact_email", (req, res) => {
    res.send({ message: "remove contact" })
})

//update contact
router.put("/update/:contact_email", (req, res) => {
    res.send({ message: "update contact" })
})
module.exports = router