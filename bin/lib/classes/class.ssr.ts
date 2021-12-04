"use strict";
const database = require("../../config/config.database")

class SSRender {
    //takes database and object representing database fields name
    constructor(database_name: string) {
        this.database_name = database_name
    }

    //api to fetch and return data from database
    render() {
        //connect to database, 
        database.promise().query("SELECT * FROM ?", this.database_name)
            .then(([rows, fields]) => {
                return res.send(rows);
            })
            .catch(error => console.log(error))
            .then(() => database.end());
    }
    //TODO:
    // //update  filed
    // update(ilem_id: any) {
    //     return "updated"
    // }

    // //dekete item
    // delete(ilem_id: any) {
    //     return "deleted"
    // }


}
module.exports = SSRender;

