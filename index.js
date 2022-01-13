const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const Sequelize = require("sequelize")

const sequelize = new Sequelize("restify", "sillicone", "", {
    host: "localhost",
    dialect: "mysql"
})

const Student = sequelize.define("student", {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
}, {
    freezeTableName: true

})

Student.sync({ force: true })
    .then(() => {
        return Student.create({
            firstName: "opeoluwa",
            lastName: "adeoye adefemi"
        })
    }).catch((error) => {
        console.log("AN ERROR OCCURRED------------------------" + error)
    })

// cass User.

// database.sequelize.sync().then((req) => {

// }).catch((error) => {
//     console.log(error.message);
// })

app.listen(PORT, () => {
    console.log("ignition started on port:" + PORT);
})



