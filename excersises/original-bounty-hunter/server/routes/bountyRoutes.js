const express = require("express");
const bountyRoutes = express.Router();
const uuid = require("uuid/v4");

bountyRoutes.get("/", (req, res) => {
    res.send(bounties);
});

bountyRoutes.get("/:id", (req, res) => {
    let bounty = bounties.find(bounty => {
        return req.params.id === bounty._id;
    });
    res.send(bounty);
});

bountyRoutes.post("/", (req, res) => {
    req.body._id = uuid();
    bounties.push(req.body);
    res.send(req.body);
});

bountyRoutes.delete("/:id", (req, res) => {
    let found = false;
    bounties = bounties.filter(bounty => {
        if (bounty._id === req.params.id) {
            found = true;
            return false;
        } else {
            return true;
        }
    });
    if (found) {
        res.send({
            message: "ITEM HAS BEEN REMOVED"
        });
    } else {
        res.send({
            message: "ITEM NOT FOUND"
        });
    }
});

bountyRoutes.put("/:id", (req, res) => {
    let newBounty = req.body;
    bounties = bounties.map(bounty => {
        if (req.params.id === bounty._id) {
            return (newBounty = Object.assign(bounty, newBounty));
        } else {
            return bounty;
        }
    });
    res.send(newBounty);
});

module.exports = bountyRoutes;
