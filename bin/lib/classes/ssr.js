const { lastIndexOf } = require("lodash");
const database = require("../../config/config.database");

var val = null
class SSRender {
    //takes database and object representing database fields name
    constructor(database_name) {
        this.database_name = database_name;
    }
    //api to fetch and return data from database
    render() {

        //connect to database, 
        database.promise().query(`SELECT * FROM  ${this.database_name}`)
            .then(([rows, fields]) => rows)
            .then(data => { val = data;})
            .catch(error => console.log(error))
            .then(() => database.end());

            console.log(val)
    }
    
}
module.exports = SSRender;

const user = new SSRender("users")
const render = user.render()
//  router.get("/ssr", render)

//  module.exports = router

console.log(render)