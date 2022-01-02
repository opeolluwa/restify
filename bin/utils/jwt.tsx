//load in dependencies
const json_web_token = require('jsonwebtoken');// generate token
require('dotenv').config() //load in evn variable

// take payload, genetate token
const jwt = (payload : Object) => json_web_token.sign(payload, process.env.JWT_KEY);

//export token
module.exports = jwt;