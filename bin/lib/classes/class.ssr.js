"use strict";
const database = require("../../config/config.database");
class SSRender {
    //takes database and object representing database fields name
    constructor(database_name) {
        this.database_name = database_name;
    }
    //api to fetch and return data from database
    render() {
        //connect to database, 
        database.promise().query(`SELECT * FROM ${this.database_name}`)
            .then(([rows, fields]) => {
            return rows;
        })
            .catch(error => console.log(error))
            .then(() => database.end());
    }
}

const project = new SSRender("skills").render()
console.log(project)
module.exports = SSRender;
