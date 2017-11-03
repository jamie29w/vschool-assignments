const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    country: {
        type: String,
        enum: ["USA", "Canada", "Mexico"]
    }
});

module.exports = mongoose.model("Property", propertySchema);

//store what you query for: we'll be looking for the puppy's address,
//so we'll give the property the ref
