const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const bountyRoutes = require("./routes/bountyRoutes");

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use("/bounties", require("./routes/bountyRoutes"));

bounties = [];

app.listen(8010, () => {
    console.log("server is running on port 8010");
});

// {
//     "fName": "Eric",
//     "lName": "Jones",
//     "living": true,
//     "bounty": 22.95,
//     "type": "Jedi"
// }
