const express = require('express');
const { register, login, profile } = require('../controllers/user');
const { validate_auth_token, decode_jwt } = require("./../middleware")
const router = express.Router();

router.post("/register", register)
router.post("/login", login)

//send in user detail, validate token from login or refresh first
router.get("/profile", validate_auth_token, decode_jwt, profile)

module.exports = router;