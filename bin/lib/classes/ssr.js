const database = require("../../config/config.database"); // load in db util
class SSRender {
    //takes database name and  an Array representing database fields to be fetched
    constructor(database_name, ...fields) {
        this.database_name = database_name; //get database name
        this.fields = fields // get  fields
    }

    //api to fetch and return data from database using provided database name
    render() {
        return new Promise((resolve, reject) => {
            //prepare query to get provided fields or all if no field is provided
            const query = `SELECT ${this.fields.join(",") || "*"} FROM ${this.database_name}`;
            //execute DB query
            database.query(query, (err, rows, fields) => {
                if (err) { reject(err) }
                resolve(rows)
            })
           
        })
        //TODO
         //close connection
         database.end()
    }
}
module.exports = SSRender;

/*use case
const user = new SSRender("users", "user_id", "password", "user_email", "user_first_name")
const render = user.render()
render.then(data => console.log(data)).catch(err => err)
*/