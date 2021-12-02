const express = require('express')
const router = express.Router()
const cors = require('cors')
const { register } = require('../controllers/auth')

router.use(cors())

//register user
router.post("/register", register)

//login user
router.post("/login", (req, res) => {

})

//reset password
router.post("/reset-password", (req, res) => {

})

//update account details
router.put("/update", (req, res) => {

})


module.exports = router