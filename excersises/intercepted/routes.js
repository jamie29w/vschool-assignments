const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    console.log(req.kaboom);
    res.send("SUCCESS!!");
});

module.exports = routes;
