//import dependencies
const database = require('./../config/database.config');
const { hash_password, compare_hash } = require("./../utils/bcrypt")
const uuid = require('./../utils/uuid');


//create user constructor
class User {
    constructor(firstname, email, phone, username) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password
    }



    //check if use exits
    exists(email) {
        //init database connection
        database.connect(err => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });

        //check if user exists
        database.query("SELECT * FROM users WHERE email = ?"[email], (err, result) => {
            if (err) return err.message
            else return result.length == 0; //return true or false 
        })
        database.end() //close database connection
    }





    //register user
    register(firstname, lastname, email, phone, username)  {
        database.connect(err => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });

        //create user insert into user 
        database.query("INSERT INTO  users  (uuid, firstname, lastname, email, password)VALUES (?,?,?,?)"[uuid, this.firstname, this.lastname, this.email, hash_password(this.password)])
    }


    login(){
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