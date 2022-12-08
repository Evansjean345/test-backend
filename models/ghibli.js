const mongoose = require("mongoose");

const ghibliSchema = mongoose.Schema({
  title: { type: String },
  poster: { type: String },
  video: { type: String },
  overview: { type: String },
  genre: { type: String },
  author: {
    name: String,
    sexe: String,
    otherWorks: String,
  },
  rating: { type: Number },
});

exports.Ghibli = mongoose.model("Ghibli", ghibliSchema);
