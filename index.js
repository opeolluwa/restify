//load in dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003

app.use(express.json())

//import routes
const __users = require("./routes/user")
app.use("/users",__users)
app.listen(PORT, async () => {
    console.log("ignition started on port:" + PORT);
})