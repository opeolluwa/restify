const database = require("../../config/config.database"); // load in db util

class SSRender {
    //takes database name and  an Array representing database fields to be fetched
    constructor(database_name, ...fields) {
        this.database_name = database_name; //get database name
        this.fields = fields // get  fields
    }

    //api to fetch and return data from database using provided database name
    render() {
        //placeholder for  number of fields to get , 
        const place_holder = Array.from("?".repeat(this.fields.length)).join(",") // return  (?, ? ... , ?) 

        //prepare query to  conditionally fetch all data if non field is provided or data from fields provided.
        /*  const query = (this.fields === null) ? "SELECT * FROM " + this.database_name : `SELECT ${place_holder} FROM ${this.database_name}` */

        const query = `SELECT ${place_holder} FROM ${this.database_name}`

        //connect to database,  fetch data
        database.promise().query(query, this.fields)
            .then(([rows, fields]) => rows)
            .then(data => { console.log(data); })
            .catch(error => console.log(error))
            .then(() => database.end());

    }

}
module.exports = SSRender;

const user = new SSRender("users", "user_id", "user_first_name", "user_email", "password")
const render = user.render()
console.log(render)