const express = require('express');
const { register, login, profile, update} = require('../controllers/user');
const { validate_auth_token, decode_jwt } = require("./../middleware")
const router = express.Router();

//register user
router.post("/register", register)

//login user, send token if success
router.post("/login", login)

//send in user detail, validate token from login or refresh first
router.get("/profile", validate_auth_token, decode_jwt, profile)

//update user profile, validate token from login or refresh first
router.put("/update", validate_auth_token, decode_jwt, update)
module.exports = router;