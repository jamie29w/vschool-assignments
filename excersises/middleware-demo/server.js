const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const morgan = require("morgan");
const port = process.env.port || 8000;

const utils = require("./utils");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(utils.explosion);

app.get("/", (req, res) => {
    console.log(req.explosion);
    res.send("Success!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
