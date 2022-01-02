const express = require('express')
const router = express.Router()
const cors = require('cors')
const { validate_contact_us_mails } = require('../middleware') //import validator middle ware
const { contact_us } = require('../controllers/contact-us')//import contaollers

router.use(cors())

//send mails
router.post('/', validate_contact_us_mails, contact_us)

module.exports = router