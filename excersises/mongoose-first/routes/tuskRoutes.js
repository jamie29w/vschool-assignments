const express = require("express");
const tuskRoutes = express.Router();
const Tusk = require("../models/tusk");

tuskRoutes.get("/", (req, res) => {
    Tusk.find({}, (err, tusks) => {
        if (err) return res.status(500).send(err);
        return res.send(tusks);
    });
});

//note that .find returns an array of objects
//.findOne returns the first ojbect that meets the search request
tuskRoutes.get("/:id", (req, res) => {
    Tusk.findOne({ _id: req.params.id }, (err, tusk) => {
        if (err) return res.status(500).send(err);
        return res.send(tusk);
    });
});

tuskRoutes.post("/", (req, res) => {
    const brandNewTusk = new Tusk(req.body);
    brandNewTusk.save((err, newTuskThatWasJustSaved) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTuskThatWasJustSaved);
    });
});

tuskRoutes.delete("/:id", (req, res) => {
    Tusk.findByIdAndRemove(req.params.id, (err, tusk) => {
        if (err) return res.status(500).send(err);
        return res.send(tusk);
    });
});

tuskRoutes.put("/:id", (req, res) => {
    Tusk.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, tusk) => {
            if (err) return res.status(500).send(err);
            return res.send(tusk);
        }
    );
});

module.exports = tuskRoutes;
