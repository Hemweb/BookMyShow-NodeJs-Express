const mongoose = require("mongoose");

//create movie schema
const MovieSchema = mongoose.Schema({
    imageurl: String,
    title: String,
    actor: String
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;