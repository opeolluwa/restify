// load in dependencies
const database = require("../config/config.database")
const { v4: uuidv4 } = require('uuid');
const jwt = require("./../utils/jwt")
const { hash_password, compare_hash } = require("../utils/bcrypt")
const _ = require('lodash');

//ADD user
function register(req, res) {
    //fetch data from pay load
    const { firstname, lastname, email, password } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM user_information WHERE LOWER(email) = ?", [email])
        .then(([rows, fields]) => {

            //add user if not exist
            if (rows[0]) {
                return res.status(409).send({ message: _.capitalize(email + " already exists") })

            }

            //inform user of existence if found
            else {
                database.promise().query("INSERT INTO user_information (user_id, firstname, lastname, email, password)  VALUES (?,?,?,?,?)", [uuidv4(), firstname, lastname, email, hash_password(password)])
                    .then(([rows, fields]) => {
                        return res.send({ message: _.capitalize(email + " successfully added") })
                    })
                    .catch(error => {
                        return res.send({ message: _.capitalize("An error occured<! please retry") })

                    })
                // .then(() => database.end());
            }
        })
        .catch(error => console.log(error))
    //REFACTOR :: fix datase throwing error when connection is closed
    // .then(() => database.end());
}





//login user return jwt
function login(req, res) {
    const { email, password } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM user_information WHERE LOWER(email) =?", [email])
        .then(([rows, fields]) => {

            //if user is found,  validate data then return data and access token
            if (rows[0]) {
                //data retrieved from database
                const { user_id, password: hash, email, firstname } = rows[0];

                //compare req.body.user_password with stored hash
                if (compare_hash(password, hash)) {
                    //send token if true
                    const jwt_token = jwt.sign({ user_id, email, firstname })
                    return res.send({ user_id, email, firstname, jwt_token })
                }
                //if data does not match, send error 
                if (!compare_hash(password, hash)) {
                    return res.send({ error: _.capitalize("Invalid email or password") })
                }
            }
            //user if not found,
            else {
                return res.send({ message: _.capitalize(email + " not found") })
            }
        })
        .catch(error => console.log(error))
    //REFACTOR :: fix datase throwing error when connection is closed
    // .then(() => database.end())
}

//update user account
function reset(req, res) {

}

//logout user, expire token now
function logout(req, res, next) {
    
}

//export class 
module.exports = { register, login, reset, logout }