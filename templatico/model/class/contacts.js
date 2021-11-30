const database = require("../../config/config.database");
//init database trasaction
database.connect(err => {
    if (err) console.error('error connecting: ' + err.stack);
    console.log('connected as id ' + database.threadId);
});



class Contact {
    /*    //check for contact existence
       constructor(name, phone, email) {
           this.name = name;
           this.email = email;
           this.phone = phone
       }
    */



    //check if user account exist using email
    email_exists(email) {
        // const { contact_email } = req.body

        database.promise().query("SELECT * FROM contacts WHERE contact_email = ?", [email])
            .then(([rows, fields]) => {
                 console.log(rows);
                
            })
            .catch(error => error.message)
            .then(() => database.end());
    }


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