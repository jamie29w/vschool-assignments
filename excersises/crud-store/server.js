const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 8008;
const puppyRoutes = require("./routes/puppyRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/puppies", puppyRoutes);
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost/puppies",
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) throw err;
        console.log("Connected to da base");
    }
);

app.listen(port, () => {
    console.log("Kreecher is watching port 8008");
});
