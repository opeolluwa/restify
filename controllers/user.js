//load in dependencies
const { User } = require("./../models")
require("dotenv").config()
const jwt = require("jsonwebtoken")


//register user 
async function register(req, res) {
    //get fields from payload
    const { firstname, lastname, email, phone, password } = req.body

    //check if user already exists using predefined primary key, email, username, or  phone
    const user = await User.findOne({ where: { email } })
    // const user = await User.findOne({ where: { phone } })
    // const user = await User.findOne({ where: { username } })

    //if user is found 
    if (user) {
        //return field by which the user is identified and a  message stating user already exists
        const user_id = user.email || user.phone || user.username;
        return res.send({ error: true, message: ` ${user_id} already exists` })
    }

    //try to create user  if not found
    try {
        const user = await User.create({ firstname, lastname, email, phone, password })
        return res.send({ error: null, message: `${user.email}  successfully added` })
    } catch (error) {
        // TODO: add generic error message
        return res.send({ error })
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
        const token = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' });
        return res.send({ token })

    }
    else {
        return res.send({ error: true, message: "invalid username or password" });
    }
}


//user profile information
 function profile(req, res) {
    /*get user object from decode_jwt middleware,
      * the fields returned are
      * {firstname, lastname, email}
      * get all required fields and then send them back to user
      */
    const { user } = req.user;
    const email = user.email

    //get user data from database 

    // const profile = await User.findOne({ where: { email: user.email } })
    // const user = await User.findOne({ where: { phone } })
    // const user = await User.findOne({ where: { username } })
    return res.send(user)
}
module.exports = { register, login, profile }