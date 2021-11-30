const express = require('express')
const router = express.Router()
const cors = require('cors')
const { add_contact, remove_contact, all_contact } = require('../controllers/contacts')
const validate_payload = require('../middleware/contact')


router.use(cors())
//default get all contacts
router.get('/',
)

//all contact
router.get("/all", all_contact)

//Add contact
router.post("/add", /* validate_payload, */ add_contact)
//remove contact
router.post("/remove", remove_contact)

//update contact
router.put("/update/:contact_email", (req, res) => {
    res.send({ message: "update contact" })
})
module.exports = router