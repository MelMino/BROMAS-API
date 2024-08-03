const mongoose = require("mongoose");

const EsquemaBroma = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Broma = mongoose.model("bromas", EsquemaBroma);

module.exports = Broma;
