//import dependencies
const database = require("./../../config/config.database")
const { hash_password, compare_hash } = require("./../utils/bcypt") // methods from bycrype
const unique_id = require('../../utils/uuid'); //universal user id
const validate_email = require("./../utils/validator");
const jwt = require("../../utils/jwt")

//create user constructor
class User {
    //check if user account exist using email
    email_exists(email) {
        //init database trasaction
        database.connect(err => {
            if (err) console.error('error connecting: ' + err.stack);
            console.log('connected as id ' + connection.threadId);
        });
        //check if user exists
        database.query("SELECT * FROM users WHERE email = ?"[email], (err, result) => {
            if (err) return err.message
            else return result.length === 0; //return true or false 
        })
        database.end() //close database connection
    }


    //check if user username exits
    email_exists(username) {
        //init database trasaction
        database.connect(err => {
            if (err) console.error('error connecting: ' + err.stack);
            console.log('connected as id ' + connection.threadId);
        });

        //begin trasaction
        database.query("SELECT * FROM users WHERE email = ?"[username], (err, result) => {
            if (err) return err.message
            else return result.length === 0; //return true or false 
        })
        database.end() //close database connection
    }



    //register user
    register(firstname, lastname, email, phone, username) {
        //init database trasaction
        database.connect(err => {
            if (err) console.error('error connecting: ' + err.stack);
            console.log('connected as id ' + connection.threadId);
        });

        // hold all error here
        const errors = [];

        //validate data
        if (!firstname) errors.push("Firstname cannot be empty");
        if (!lastname) errors.push("Lastame cannot be empty");
        if (!email || validate_email(email)) errors.push("Provide a valid Email")
        if (!phone) errors.push("Please provide a valid phone number")
        if (this.username_exists(username)) errors.push("Username hasbeen taken")
        if (this.email_exists(email)) errors.push("User exists!")

        // if no error, create user
        if (!errors) {
            try {
                database.query("INSERT INTO  users  (uuid, firstname, lastname, email, password)VALUES (?,?,?,?)"[unique_id, firstname, lastname, email, hash_password(password)])
            }
            catch (internal_error) {
                console.log(internal_error.message)
            }
        }

        //return status and error handler
        return { message: "successful", errors, jwt }
    }





    login() {
        database.connect(err => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });

        database.query("SELECT * FROM users  WHERE email = ?")
    }
}


//export user
module.exports = User;