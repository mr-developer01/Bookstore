const express = require("express");
const app = express()

const connectDb = require("./config/mongoose-connection")
connectDb()

app.get("/", (req, res) => {
    res.send("Working...")
})

app.listen(3000)