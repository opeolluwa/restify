const email_validation = require('nodejs-email-validation')
const iodash = require("iodash") // hellper module for string manioulation

//TODO: import and use express walidatorDO: 

module.exports = {
    validate_auth_register: (req, res, next) => {
        //fetch data from pay load
        const { user_email, user_first_name, user_last_name, user_phone, password } = req.body
        const errors = []; //hold validation error 

        //!use_email
        //TODO: validate email with module
        if (!user_email/*  || !email_validation(user_email).validate() */) {
            errors.push(iodash.capitalize("please provide a valid mail"))
        }

        //!user_first_name
        //TODO: use validator
        if (!user_first_name) {
            errors.push(iodash.capitalize("please provide first name"))
        }

        //!user_last_name
        //TODO: use validator
        if (!user_last_name) { errors.push(iodash.capitalize("please provide last name")) }


        //!user_last_name
        //TODO: use validator
        if (!user_phone) {
            errors.push(iodash.capitalize("please provide  phone number"))
        }

        //!password
        //TODO: use validator
        if (!password || password.length < 8) {
            errors.push(iodash.capitalize("please enter a password of minimum of  8 characters"))
        }

        //if error send the error
        if (errors.length) {
            res.status(400).send(errors)
        }
        else return
        
        next();
    },

    validate_auth_login: (req, res, next) => {
        //fetch data from pay load
        const { user_email, user_password } = req.body
        //!use_email
        if (!user_email/*  || !email_validation(user_email).validate() */) {
            errors.push(iodash.capitalize("invalid mail or password"))
        }

        if (!user_password) {
            errors.push(iodash.capitalize("invalid email or password"))
        }
        next();
    }
}