// load in dependencies
const database = require("../config/config.database")
const uuid = require("./../utils/uuid")
const jwt = require("./../utils/jwt")
const { hash_password, compare_hash } = require("../utils/bcrypt")


//ADD user
//TODO: Add middle ware to validate user data 
function register(req, res) {
    //fetch data from pay load
    const { user_email, user_first_name, user_last_name, user_phone, password } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM users WHERE LOWER(user_email) =?", [user_email])
        .then(([rows, fields]) => {

            //add user if not exist
            if (!rows[0]) {
                database.promise().query("INSERT INTO users (user_id, user_first_name, user_last_name, user_email, user_phone, password)  VALUES (?,?,?,?,?,?)", [uuid, user_first_name, user_last_name, user_email, user_phone, hash_password(password)])
                    .then(([rows, fields]) => {
                        return res.send({ message: user_email + " successfully added" })
                    })
                    .catch(error => console.log(error))
                // .then(() => database.end());
            }

            //inform user of existence if found
            else {
                return res.status(409).send({ message: user_email + " already exists" })
            }
        })
        .catch(error => console.log(error))
    // .then(() => database.end());
}





//login user return jwt
//TODO:add middle ware to validate user data
function login(req, res) {
    const { user_email, user_password } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM users WHERE LOWER(user_email) =?", [user_email])
        .then(([rows, fields]) => {

            //if user is found,  validate data then return data and access token
            if (rows[0]) {
                //data retrieved from database
                const { user_id, password, user_email, user_first_name } = rows[0];

                //compare red.bo dy.user_password with stored hash
                if (compare_hash(user_password, password)) {
                    //TODO: add jwt to request header and not body
                    const jwt_token = jwt({ user_id, user_email, user_first_name })
                    return res.send({  user_id, user_email, user_first_name, jwt_token })
                }
                //if data does not match
                if (!compare_hash(user_password, password)) {
                    return res.send({ error: "Invalid email or password" })
                }
            }
            //user  not found,
            else {
                return res.send({ message: user_email + " not found" })
            }
        })
        .catch(error => console.log(error))
    // .then(() => database.end())
}
//export class 
module.exports = { register, login }