const express = require('express')
const router = express.Router()
const cors = require('cors')
const { register, login } = require('../controllers/auth')

router.use(cors())


router.post("/register", register) // register user
router.post("/login", login) //login user
 //TODO: update user data
 //TODO:: reset password

module.exports = router