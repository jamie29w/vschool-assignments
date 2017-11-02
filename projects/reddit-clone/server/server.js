const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 8800;
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/posts", postRoutes);

// mongoose.connect(`mongodb://localhost/posts`, err => {
//     if (err) throw err;
//     console.log(`Connected to da base`);
// });

mongoose.connect("mongodb://localhost/posts", {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

mongoose.Promise = global.Promise;

app.listen(port, () => {
    console.log(`Kreecher has been watching port ${port}`);
});
