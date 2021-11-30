// load in dependencies
const database = require("../config/config.database")
const { hash_password, compare_hash } = require("../utils/bcypt") // methods from bycrypt
const unique_id = require('../utils/uuid'); //universal user id
const validate_email = require("../utils/validator");
const jwt = require("../utils/jwt")



function add_contact(req, res) {
    //fetch data from pay load
    const { contact_email, contact_name, contact_phone } = req.body
    console.log({ contact_email, contact_name, contact_phone });

    //check if user exists
    database.promise()
        .query("SELECT * FROM contacts WHERE LOWER(contact_email) =?", [contact_email])
        .then(([rows, fields]) => {
            //add user if not exist
            if (!rows[0]) {
                database.promise().query("INSERT INTO contacts (contact_name, contact_email, contact_phone)  VALUES (?,?,?)", [contact_name, contact_email, contact_phone])
                    .then(([rows, fields]) => {
                        return res.send({ message: contact_email + " successfully added" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }
            //inform user of existence if found
            else {
                return res.send({ message: contact_email + " already exists" })
            }
        })
        .catch(console.log)
        .then(() => database.end());
}

function remove_contact(req, res) {

}

//export class 
module.exports = { add_contact, remove_contact }