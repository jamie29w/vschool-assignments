const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const puppySchema = new mongoose.Schema({
    breed: {
        required: true,
        type: String
    },
    coloring: Array,
    male: {
        required: true,
        type: Boolean
    },
    age: {
        required: true,
        type: Number
    },
    fixed: Boolean
});

module.exports = mongoose.model("Puppy", puppySchema);
