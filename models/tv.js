const mongoose = require("mongoose");

const tvSchema = mongoose.Schema({
  title: { type: String },
  runtime: { type: Number },
  poster: { type: String },
  video: { type: String },
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
  seasons: { type: String },
});

exports.Tv = mongoose.model("Tv", tvSchema);
