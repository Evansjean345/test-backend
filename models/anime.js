const mongoose = require("mongoose");

const animeSchema = mongoose.Schema({
  title: { type: String },
  poster: { type: String },
  episodes: { type: String },
  overview: { type: String },
  streamingInfo: {
    production: String,
    country: String,
    year: Number,
  },
  genre: { type: String },
  author: {
    name: String,
    sexe: String,
    otherWorks: String,
  },
  rating: { type: Number },
  video: { type: String },
});

exports.Anime = mongoose.model("Anime", animeSchema);
