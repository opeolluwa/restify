const express = require('express')
const router = express.Router()
const cors = require('cors')
const { ssr_user, ssr_contacts } = require('../controllers/ssr')

router.use(cors())

router.get("/users", ssr_user)
router.get("/contacts", ssr_contacts)


module.exports = router