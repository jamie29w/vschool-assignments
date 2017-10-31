const express = require("express");
const postRoutes = express.Router();
const Post = require("../models/post");

postRoutes.get("/", (req, res) => {
    Post.find(req.query, (err, foundPosts) => {
        if (err) return res.status(500).send(err);
        return res.send(foundPosts);
    });
});

postRoutes.post("/");

postRoutes.delete("/:id");

postRoutes.put("/:id");

postRoutes.get("/:id");

module.exports = postRoutes;
