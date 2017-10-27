const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tuskSchema = new Schema({
    length: Number,
    colorOptions: [String],
    fromMale: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Tusk", tuskSchema);

//above is shorter version of:
// const Tusk = mongoose.model("Tusk", tuskSchema);
// module.exports = Tusk
