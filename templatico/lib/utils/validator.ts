/* take email and validate it */
const email_validator = require('email_validator');
const validate_email = (email): Boolean => email_validator(email)