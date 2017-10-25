const express = require("express");
const app = express();
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

bounties = [];

app.get("/bounties", (req, res) => {
    res.send(bounties);
});

app.post("/bounties", (req, res) => {
    req.body._id = uuid();
    bounties.push(req.body);
    res.send(req.body);
});

app.listen(8010, () => {
    console.log("server is running on port 8010");
});

// {
//     "fName": "Eric",
//     "lName": " jones",
//     "living": true,
//     "bounty": 22.95,
//     "type": "Jedi"
// }
