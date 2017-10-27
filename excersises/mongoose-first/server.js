const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");
const tusksRoutes = require("./routes/tusksRoutes");

mongoose.connect("mongodb://localhost/narwhal-tusks", err => {
    if (err) throw err;
    console.log(`Connected to the db`);
});

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

narwhalTusks = [];

app.get("/", (req, res) => {
    res.send(`Success!`);
});

app.listen(port, () => {
    console.log(`Kreecher is watching port ${port}`);
});
