const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid");

app.use(bodyParser.json());

app.get("/harrypottercharacters", (req, res) => {
    res.send(characters);
});

const characters = [];

app.post("/harrypottercharacters", (req, res) => {
    req.body._id = uuid();
    characters.push(req.body);
    res.send(req.body);
});

app.listen(8080, () => {
    console.log(`Kreecher was watching port 8080`);
});
