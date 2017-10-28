const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const tuskRoutes = require("./routes/tuskRoutes");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(tuskRoutes);

mongoose.connect("mongodb://localhost/narwhal-tusks", err => {
    if (err) throw err;
    console.log(`Connected to the db`);
});

app.get("/", (req, res) => {
    res.send(`Success!`);
});

app.listen(port, () => {
    console.log(`Kreecher is watching port ${port}`);
});
