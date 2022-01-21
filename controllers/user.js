//load in dependencies
const { User } = require("./../models")
require("dotenv").config()
const jwt = require("jsonwebtoken")


//register user 
async function register(req, res) {
    //get fields from payload
    const { firstname, lastname, email, phone, password } = req.body
    //try to create user
    try {
        const user = await User.create({ firstname, lastname, email, phone, password })
        //TODO; check if user already exists
        return res.send({ error: null, message: user.email + " successfully added" })
    } catch (error) {
        res.send({ error })
    }
}


//authenticate user for login
async function login(req, res) {
    //get preferred fields from request typically username || email || phone and password
    let { email, password } = req.body;
    // const { username , password } = req.body;
    // const { phone, password } = req.body;

    //remove spaces from payload 
    email = email.trim();
    // phone = phone.trim();
    // username = username.trim();
    password = password.trim();

    //get user data from database 
    const user = await User.findOne({ where: { email } })
    // const user = await User.findOne({ where: { phone } })
    // const user = await User.findOne({ where: { username } })

    //validate user password and user data
    const validPassword = user.authenticate(password);

    //if the password is valid send token send if not  error
    if (validPassword) {
        // generate and send token back to request 

        //TODO: remove user password  from token  payload 
        const token = jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.send({ token })

    }
    else {
        return res.send({ error: true, message: "invalid username or password" });
    }
}


//user profile information
async function profile(req, res) {
    //TODO: build user profile end point 
}
module.exports = { register, login, profile }