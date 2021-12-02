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
                database.promise().query("INSERT INTO users (user_id, user_first_name, user_last_name, user_email, user_phone, password)  VALUES (?,?,?,?,?,?)", [uuid, user_first_name, user_last_name, user_email, user_phone, password])
                    .then(([rows, fields]) => {
                        return res.send({ message: user_email + " successfully added" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }

            //inform user of existence if found
            else {
                return res.send({ message: user_email + " already exists" })
            }
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}



//REMOVE user
//TODO: authorize user deletion wiht token
function remove_user(req, res) {
    //fetch data from pay load
    const { user_email } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM users WHERE LOWER(user_email) =?", [user_email])
        .then(([rows, fields]) => {
            //add user if not exist
            if (!rows[0]) {
                return res.status(404).send({ message: user_email + " not found" })
            }

            //delet if found, return sattus
            else {
                //TODO: //validate JWT token in header before delete

                database.promise().query("DELETE * FROM users WHERE user_email = ?", [user_email])
                    .then(([rows, fields]) => {
                        return res.send({ message: user_email + " successfully removed" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}


//TODO: update user field
function update() {

}

//login user return jwt
//TODO:add middle ware to validate user data
function login(req, res) {
    const { user_email, user_password } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM users WHERE LOWER(user_email) =?", [user_email])
        .then(([rows, fields]) => {

            //add user if not exist
            if (rows[0]) {
                database.promise().query(" SELECT (user_id, password, user_email, user_ first_name) FROM users")
                    .then(([rows, fields]) => {
                        return res.send({ message: user_email + " successfully added" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }

            //inform user of existence if found
            else {
                return res.send({ message: user_email + " already exists" })
            }
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}
//export class 
module.exports = { register }