"use strict";
//load in dependencies
const json_web_token = require('jsonwebtoken'); // generate token
require('dotenv').config(); //load in environment  variables

const jwt = {
    // take payload, generate token, it expires in six hour
    sign: (payload) => json_web_token.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' }),
    // take payload, verify token
    verify: (payload) => {
        try {
            const decoded = json_web_token.verify(payload, process.env.JWT_KEY);
            return decoded
        } catch (err) {
            // err
            return undefined
        }
    }
}
//export token
module.exports = jwt;