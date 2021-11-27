import database from "../../config/config.database";

class Contact {
    //add new contact
    add(name, email, phone) {
        const query = "INSERT (name, email, phone) into contacts VALUES (?,?,?)";
        //init database connection
        database.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + database.threadId);
        });

        //execute database trasaction
        database.query(query, [name, email, phone], (err, Result) => {
            if (err) return err.message
            else return { error: null, status: "success" }
        })
    }



    //remove contact
    remove(email) {
        const query = "DELETE * FROM  contacts WHERE email =?";
        //init database connection
        database.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + database.threadId);
        });

        //execute database trasaction
        database.query(query, [email], (err, Result) => {
            if (err) return err.message
            else return { error: null, status: "success" }
        })
    }

    //update contact detail
    update(contact_email, fields_to_update /* ={ name = "", email = "", phone = "" }*/) {
        const query = "SELECT * FROM  contacts WHERE email =?";

        //init database connection
        database.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + database.threadId);
        });

        //execute database trasaction
        database.query(query, [contact_email], (err, rows) => {
            if (err) return err.message

            //destructure data fetched from database
            const contact = rows[0];

            //destructure data from field to update
            const { contact_name, contact_email, contact_phone } = fields_to_update;

            //update contact 
            Object.assign(contact, contact_name, contact_email, contact_phone)

            //retur ncontrol logic
            return { error: null, status: "success" }
        })
    }
}


//export class 
module.exports = Contact