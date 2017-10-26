const express = require("express");
const burritoRoutes = express.Router();

//functions have been simplified; emphasis is on changes from implementing Router

burritoRoutes.get("/", (req, res) => {
    res.send("GET burritos");
});

burritoRoutes.get("/:id", (req, res) => {
    res.send("GET ONE burrito");
});

burritoRoutes.post("/", (req, res) => {
    res.send("POST burritos");
});

burritoRoutes.delete("/:id", (req, res) => {
    res.send("DELETE burritos");
});

burritoRoutes.put("/:id", (req, res) => {
    res.send("PUT burritos");
});

module.exports = burritoRoutes;
