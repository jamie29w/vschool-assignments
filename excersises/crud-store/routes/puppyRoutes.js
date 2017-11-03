const express = require("express");
const puppyRoutes = express.Router();
const Puppy = require("../models/puppy");

// puppyRoutes.get("/", (req, res) => {
//     Puppy.find(req.query, (err, foundPuppies) => {
//         if (err) return res.status(500).send(err);
//         return res.send(foundPuppies);
//     });
// });

puppyRoutes.get("/", (req, res) => {
    const query = {};
    if (req.query.name) {
        query.name = req.query.name;
    }
    Puppy.find(query)
        .populate("address")
        .exec((err, foundPuppies) => {
            if (err) return res.status(500).send(err);
            return res.send(foundPuppies);
        });
});

puppyRoutes.get("/:id", (req, res) => {
    Puppy.findById(req.params.id, (err, foundPuppy) => {
        if (err) return res.status(500).send(err);
        return res.send(foundPuppy);
    });
});

puppyRoutes.post("/", (req, res) => {
    const newPuppy = new Puppy(req.body);
    newPuppy.save((err, postedPuppy) => {
        if (err) return res.status(500).send(err);
        return res.send(postedPuppy);
    });
});

puppyRoutes.delete("/:id", (req, res) => {
    Puppy.findByIdAndRemove(req.params.id, (err, deletedPuppy) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedPuppy);
    });
});

puppyRoutes.put("/:id", (req, res) => {
    Puppy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPuppy) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedPuppy);
        }
    );
});

module.exports = puppyRoutes;
