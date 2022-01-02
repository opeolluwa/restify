"use strict";
//load in dependencies
const json_web_token = require('jsonwebtoken'); // generate token
const { JWT_KEY } = require('../config/config.env');
require('dotenv').config(); //load in evn variable

const jwt = {
    // take payload, genetate token, it expires in six hour
    sign: (payload) => json_web_token.sign(payload, JWT_KEY, { expiresIn: '1h' }),
    // take payload, verify token
    verify: (payload) => {
        try {
            const decoded = json_web_token.verify(payload, JWT_KEY);
            return decoded
        } catch (err) {
            // err
            return undefined
        }
    }
}
//export token
module.exports = jwt;


