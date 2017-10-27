const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const port = process.env.port || 8000;
const utils = require("./utils");

const routes = require("./routes");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(utils.kaboom);
app.use(routes);

// app.get("/", (req, res) => {
//     console.log(req.kaboom);
//     res.send("SUCCESS!!");
// });

app.listen(port, () => {
    console.log(`Kreecher is watching port ${port}`);
});
