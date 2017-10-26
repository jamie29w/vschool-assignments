const express = require("express");
const tacoRoutes = express.Router();

//functions have been simplified; emphasis is on changes from implementing Router

tacoRoutes.get("/", (req, res) => {
    res.send("GET tacos");
});

tacoRoutes.get("/:id", (req, res) => {
    res.send("GET ONE taco");
});

tacoRoutes.post("/", (req, res) => {
    res.send("POST tacos");
});

tacoRoutes.delete("/:id", (req, res) => {
    res.send("DELETE tacos");
});

tacoRoutes.put("/:id", (req, res) => {
    res.send("PUT tacos");
});

module.exports = tacoRoutes;
