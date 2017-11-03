const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puppySchema = new Schema({
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
    fixed: Boolean,
    address: {
        type: Schema.Types.ObjectID,
        ref: "Property"
    }
});

module.exports = mongoose.model("Puppy", puppySchema);

//store what you query for: we'll be looking for the puppy's address,
//so we'll give the property the ref
