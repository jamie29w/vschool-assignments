const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    },
    votes: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Post", postSchema);
