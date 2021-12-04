const email_validation = require('nodejs-email-validation')
//TODO:import and use express walidatorDO: 

module.exports = {
    validate_auth_register: (req, res, next) => {
        //fetch data from pay load
        const { user_email, user_first_name, user_last_name, user_phone, password } = req.body

        //!use_email
        if (!user_email || !email_validation(user_email).validate()) { return res.status(400).send({ message: "please provide a valid mail" }) }

        //!user_first_name
        //TODO: use validator
        if (!user_first_name) { return res.status(400).send({ message: "please provide first name" }) }

        //!user_last_name
        //TODO: use validator
        if (!user_last_name) { return res.status(400).send({ message: "please provide last name" }) }


        //!user_last_name
        //TODO: use validator
        if (!user_phone) { return res.status(400).send({ message: "please provide  phone number" }) }

        //!password
        //TODO: use validator
        if (!password || password.length < 8) { return res.status(400).send({ message: "please enter a password of minimum of  8 characters" }) }

        next();
    },

    validate_auth_login: (req, res, next) => {
        //fetch data from pay load
        const { user_email, user_password } = req.body
        //!use_email
        if (!user_email || !email_validation(user_email).validate()) { return res.status(400).send({ message: "invalid mail or password" }) }
        if (!user_password) { return res.status(400).send({ message: "invalid email or password" }) }
        next();
    }
}