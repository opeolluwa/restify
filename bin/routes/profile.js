//load in dependencies
const express = require('express');
const router = express.Router()
const cors = require('cors');
const { profile_information, update_profile_information } = require('../controllers/profile');
const { decode_jwt, validate_auth_token } = require('../middleware');

router.use(cors())
/*
* accept token in headers
* validate token with validate_auth_token,
* decode token, get user email using decode_jwt
* use the email to get user profile information using profile _information
*/
router.post("/update", validate_auth_token, decode_jwt, update_profile_information)


/*
* accept token in headers
* validate token with validate_auth_token,
* decode token, get user email using decode_jwt
* update user account information using update_profile_information
*/
router.get("/", validate_auth_token, decode_jwt, profile_information)


module.exports = router