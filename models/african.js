const mongoose = require("mongoose");

const africanSchema = mongoose.Schema({
  title: { type: String },
  poster: { type: String },
  video: { type: String },
  overview: { type: String },
  genre: { type: String },
  rating: { type: Number },
});

exports.African = mongoose.model("African", africanSchema);
