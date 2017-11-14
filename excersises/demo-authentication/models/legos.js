let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let legoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pieces: {
        required: true,
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Lego", legoSchema);
