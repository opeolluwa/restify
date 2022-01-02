const email_validator = require("email-validator");
const validUrl = require('valid-url');
const _ = require('lodash');
const jwt = require("../utils/jwt");


module.exports = {
    //verify registration data
    validate_auth_register: (req, res, next) => {
        //fetch data from pay load
        const { email, firstname, lastname, password } = req.body

        //!use_email
        if (!email_validator.validate(email)) {
            return res.status(400).send({ message: _.capitalize("please provide a valid mail") })
        }

        //!user_first_name
        if (!firstname) {
            return res.status(400).send({ message: _.capitalize("please provide first name") })
        }

        //!user_last_name

        if (!lastname) {
            return res.status(400).send({ message: _.capitalize("please provide last name") })
        }

        //!password

        if (!password || password.length < 8) {
            return res.status(400).send({ message: _.capitalize("please enter a password of minimum of  8 characters") })
        }

        //proceed with othe transaction
        next();
    },

    //verify login details
    validate_auth_login: (req, res, next) => {
        //fetch data from pay load
        const { email, password } = req.body
        //!use_email
        if ((!email) || (!email_validator.validate(email))) { return res.status(400).send({ message: "invalid mail or password" }) }
        if (!password) { return res.status(400).send({ message: _.capitalize("invalid email or password") }) }
        next();
    },

    //handle search :: quering database
    validate_search_query: (req, res, next) => {
        const { query } = req.body;

        if (!query || query.length <= 3) {
            res.status(400).send({ message: _.capitalize("please provide a keyword of minimum character length = 5") })
        }
        next();
    },

    //handle adding files to database
    validate_search_add_files: (req, res, next) => {
        //destrucure request body
        const { course_title, course_code, file_url, file_type } = req.body

        //!course_title
        if (!course_title || (course_title.length <= 5)) {
            res.status(400).send({ message: _.capitalize("please add more detail to course title") })
        }

        //!course_code
        if (!course_code || (course_code.length <= 3)) {
            res.status(400).send({ message: _.capitalize("please provide a valid course code") })
        }
        //!file_url or url not valid,
        const validUrl = require('valid-url');
        if ((!file_url) || (!validUrl.isUri(file_url))) {
            res.status(400).send({ message: _.capitalize('file link doesn\'t Look valid') })
        }
        //!file_type
        if (!file_type || (course_title.length <= 4)) {
            res.status(400).send({ message: _.capitalize("please provide file type, options are note and questions") })
        }
        next()
    },
    //handle sending emails
    validate_contact_us_mails(req, res, next) {
        //get the payload
        const { email, subject, name, message } = req.body

        //if !email or invalid emai
        if ((!email_validator.validate(email)) || !email) {
            return res.status(400).send({ message: _.capitalize("please provide a valid e-mail") })
        }
        //if not name
        if (!name) {
            return res.status(400).send({ message: _.capitalize("please provide your name") })
        }
        //if not subject or little detail provided
        if ((!subject) || (subject.length < 5)) {
            return res.status(400).send({ message: _.capitalize("please provide more details in subject feed") })
        }
        //if not message 
        if ((!message) || (message.length < 15)) {
            return res.status(400).send({ message: _.capitalize("please provide more details in message feed") })
        }
        //continue to next middleware ()
        next()

    },
    //checks if user add token to header and validate token
    validate_auth_token: (req, res, next) => {

        try {
            //get payload headers
            const auth_headers = req.headers["authorization"] || req.headers["Authorization"];
            //check if not undefined
            if (typeof auth_headers !== 'undefined') {
                const jwt = auth_headers.split(" ")[1]
                //pass it to next controller or middleware
                req.token = { jwt };
                // return res.send(jwt)
                next();
            }
        } catch (error) {
            //if no auth headers is found send forbidden
            res.status(403).send({ message: _.capitalize("forbidden!") })

        }
    },
    //verify token
    decode_jwt: (req, res, next) => {

        try {
            //get token from validate_auth_oken middleware
            const { jwt: token } = req.token;

            //send un athorized error if token not found
            if (!jwt.verify(token)) {
                res.status(403).send({ message: _.capitalize("forbidden!") })
            }
            //else fire on
            const user = jwt.verify(token);
            req.user = user
            next();
        } catch (error) {
            res.status(403).send({ message: _.capitalize("forbidden!") })
        }


    }
}