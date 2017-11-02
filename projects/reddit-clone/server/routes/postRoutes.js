const express = require("express");
const postRoutes = express.Router();
const Post = require("../models/post");

postRoutes.get("/", (req, res) => {
    Post.find(req.query, (err, foundPosts) => {
        if (err) return res.status(500).send(err);
        return res.send(foundPosts);
    });
});

postRoutes.get("/:id", (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if (err) return res.status(500).send(err);
        return res.send(foundPost);
    });
});

postRoutes.post("/", (req, res) => {
    const newPost = new Post(req.body);
    newPost.save((err, postedPost) => {
        if (err) return res.status(500).send(err);
        return res.send(postedPost);
    });
});

postRoutes.delete("/:id", (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedPost);
    });
});

postRoutes.put("/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedPost);
        }
    );
});

module.exports = postRoutes;
