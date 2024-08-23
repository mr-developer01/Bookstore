const express = require("express");
const app = express();
const cors = require("cors")
// Db connection
const connectDb = require("./config/mongoose-connection");
connectDb();
// importing routes
const bookRoute = require("./routes/book-route");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All API's
app.use("/api/v1", bookRoute);

app.listen(3000);
