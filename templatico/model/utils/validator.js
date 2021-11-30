/* take email and validate it */
const email_validator = require('nodejs-email-validation')
const validate_email = (email)=> email_validator(email)

module.exports = email_validator;