const json_web_token = require('jsonwebtoken');

//genetate token
const jwt = (payload) => json_web_token.sign(payload, process.env.JWT_KEY);

module.exports = jwt;