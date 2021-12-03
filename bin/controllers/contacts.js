// load in dependencies
const database = require("../config/config.database")


// ALL CONTACT
function all_contact(req, res) {
    database.promise().query("SELECT * FROM contacts")
        .then(([rows, fields]) => {
            return res.send(rows);
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}

//ADD CONTACT
function add_contact(req, res) {
    //fetch data from pay load
    const { contact_email, contact_name, contact_phone } = req.body

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
        .catch(error => console.log(error))
        .then(() => database.end());
}



//REMOVE CONTACT
function remove_contact(req, res) {
    //fetch data from pay load
    const { contact_email } = req.body

    //check if user exists
    database.promise()
        .query("SELECT * FROM contacts WHERE LOWER(contact_email) =?", [contact_email])
        .then(([rows, fields]) => {
            //add user if not exist
            if (!rows[0]) {
                return res.status(404).send({ message: contact_email + " not found" })
            }

            //inform user of existence if found
            else {
                database.promise().query("DELETE * FROM contacts WHERE contact_email = ?", [contact_email])
                    .then(([rows, fields]) => {
                        return res.send({ message: contact_email + " successfully removed" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}



//UPDATE CONTACT

//TODO: restructure payload to use auth token to remove contact
//TODO: test update contact end piont 

function update_contact(req, res) {
    //fetch data from pay load
    const { contact_email, contact_name, contact_phone } = req.body.fields

    //check if user exists
    database.promise()
        .query("SELECT * FROM contacts WHERE LOWER(contact_email) =?", [contact_email])
        .then(([rows, fields]) => {
            //add user if not exist
            if (!rows[0]) {
                return res.status(404).send({ message: contact_email + " not found" })
            }

            //CASE EMAIL && phone
            else if (contact_phone, contact_name) {
                //check for existing fields from the payload
                database.promise().query("UPDATE  contacts SET contact_phone = ?, contact_name = ? WHERE contact_email = ?", [contact_phone, contact_name, contact_email])
                    .then(([rows, fields]) => {
                        return res.send({ message: contact_email + " name and phone successfully updated" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }

            //CASE EMAIL
            else if (contact_phone) {
                //check for existing fields from the payload
                database.promise().query("UPDATE  contacts SET contact_phone = ? WHERE contact_email = ?", [contact_phone, contact_email])
                    .then(([rows, fields]) => {
                        return res.send({ message: contact_email + " name successfully updated" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }

            //CASE NAME
            else if (contact_name) {
                //check for existing fields from the payload
                database.promise().query("UPDATE  contacts SET contact_phone = ? WHERE contact_email = ?", [contact_name, contact_email])
                    .then(([rows, fields]) => {
                        return res.send({ message: contact_email + " name successfully updated" })
                    })
                    .catch(error => console.log(error))
                    .then(() => database.end());
            }
            //CASE EMAII
            else {
                return res.send({ error: "sorry mails cannot be changed" })
            }
        })
        .catch(error => console.log(error))
        .then(() => database.end());
}


//export class 
module.exports = { all_contact, add_contact, remove_contact }