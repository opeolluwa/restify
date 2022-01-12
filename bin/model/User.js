//import dependencies
require("dotenv").config()
const { Sequelize, DataTypes, Model } = require("sequelize")

//instantiate sequelize as database
const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_ACCESS_KEY,
    database: process.env.DB_SCHEMA
});



class User extends Model { }


User.init({
    // Model attributes are defined here
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
},
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
        freezeTableName: true // dont rename  table
    });

// the defined model is the class itself
console.log(User === sequelize.models.User);
sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");