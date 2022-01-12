const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

// //import database
const database = require("./models")

//import user authentication routes
const userAuthentication = require("././routes/user-authentication");
const  User  = require('./models/User');


app.get("/select", (req, res) => {
    res.send("select")
})


app.get("/insert", (req, res) => {
    User.build({
        firstname: "adeoye",
        age: 34
    })
        .catch((error) => {
        res.send(error)
    })
})

app.get("/register", (req, res, next) => {
    //get values from fields
    // const { firstname, lastname, email, password } = req.body
    //Get user model and create an instance using data fetched from the http request
    User.create({
        firstname: "adeoye"
    })
        .catch((error) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send("success")
            }
        })
})

//sync database
// app.listen(PORT, () => {
//     console.log("ignition started on port:" + PORT);
// })



database.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log("ignition started on port:" + PORT);
    })
}).catch((error) => {
    console.log(error.message);
})




