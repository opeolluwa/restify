//load in dependencies
const { sequelize, User } = require("./models");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

//import routes
const __users = require("./routes/user")
app.use("/users", __users)


app.listen(PORT, async () => {
    await sequelize.sync()
    console.log("ignition started on port:" + PORT);
})