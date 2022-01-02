const express = require('express')
const router = express.Router()
const cors = require('cors')
const { register, login } = require('../controllers/auth')
const { validate_auth_login, validate_auth_register } = require('../middleware')



router.use(cors())

router.post("/sign-up", validate_auth_register, register) // register user
router.post("/login", validate_auth_login, login) //login user

//TODO: update user data
//TODO:: reset password

module.exports = router