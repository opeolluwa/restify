//load in dependencies
const { sequelize, } = require("./models");
const useragent = require('express-useragent');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

//core middleware
app.use(express.json());
app.use(useragent.express());

//test
app.get("/api", (req, res) => {
    return res.send("ignition started")
})

/*POST:: /user/register
POST:: /user/login
GET:: /user/profile
*/const __users = require("./routes/user");
app.use("/users", __users)


/*POST:: /user/subscribe
PUT:: /user/confirm-email
POST:: /user/unsubscribe
*/const __newsLetter = require("./routes/newsletter");
app.use("/news-letter", __newsLetter)

//for analytics be sure to have it as the last to make sure named routes are matched first
//match all endpoint and all http verb then pass the payload to database for
//TODO use universal route matching  app.all("/*", (req, res) => {
app.all("*", (req, res) => {
    //TODO: create a middleware that will take req.useragent and pass it to database analytics model I
    //TODO:// create a client script for adding analytics  into client interface that have not interactions with home endpoint eg about us page or home page, user an HTTP verb to make endpoint to ./ route or analytics of the api
    return res.send(req.useragent)
})

app.listen(PORT, async () => {
    await sequelize.sync()
    console.log("ignition started on port:" + PORT);
})