const express = require('express')
const router = express.Router()
const cors = require('cors')
const { nethbooks } = require('../controllers/analytics')
router.use(cors())

//register user
router.get("/nethbooks", nethbooks)


module.exports = router