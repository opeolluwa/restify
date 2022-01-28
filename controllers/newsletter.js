//load in dependencies
require("dotenv").config()
const { NewsLetter } = require("./../models") //database model
const nodemailer = require('nodemailer'); //package to handle mails
const otpGenerator = require('otp-generator'); //package to generate one time password (OTP)
const jwt = require("jsonwebtoken")


//controller to add subscriber to newsletter list
async function subscribe(req, res, next) {
    //accept subscriber email, check if mail is valid then send token to the mail box for validation
    const { email } = req.body

    if (!email) {
        return res.send({ message: "Invalid email", error: true })
    }
    try {
        //check if subscriber already exist
        const subscriber = await NewsLetter.findOne({ where: { email } });

        //if subscriber is found 
        if (subscriber) {
            //return field by which the subscriber is identified and a  message stating subscriber already exists
            const subscriber_id = subscriber.email;
            return res.send({ error: true, message: ` ${subscriber_id} already exists` })
        }
    } catch (error) {
        return res.send({ error: "An internal error occurred, please retry after some time." })
        // return res.send({ error })

    }

    //try to create subscriber if it does not exist
    try {
        //generate 12 length token
        let otp = otpGenerator.generate(12, { upperCaseAlphabets: true, specialChars: true });
        const subscriber = await NewsLetter.create({ email, registrationToken: otp });

        // generate and send token back to request 
        const token = jwt.sign({ email, otp }, process.env.JWT_KEY, { expiresIn: '24h' });
       
        //TODO: send token as payload to node mailer

        return res.send({ error: null, verify, token, message: `A token was sent to ${subscriber.email}, please input the token to complete the subscription` })
    } catch (error) {
        // add generic error message on failed request
        return res.send({ error: "An internal error occurred, please retry after some time." })
        // return res.send({ error })

    }

}


async function unsubscribe(req, res) {

}

//confirm the mail added is valid then send a token to validate the registration
async function confirmSubscription(req, res) {

}
module.exports = { subscribe, unsubscribe, confirmSubscription }