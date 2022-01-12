//import dependencies
require("dotenv").config()
const { Sequelize } = require("sequelize")

//instantiate sequelize as database
const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_ACCESS_KEY,
    database: process.env.DB_SCHEMA
});


//test database connection
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//export sequelize instance ==> database 
module.exports = sequelize