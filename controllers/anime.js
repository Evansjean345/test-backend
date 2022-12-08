const { Anime } = require("../models/anime");

exports.createAnime = async (req, res) => {
  await Anime.create({
    ...req.body,
  })
    .then((anime) => console.log(anime))
    .then(() => res.status(201).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyAnime = async (req, res) => {
  await Anime.updateOne({ _id: req.params.id }, { ...req.body })
    .then((anime) => console.log(anime))
    .then(() => res.status(200).json({ message: "opération réussie " }))
    .catch((error) => res.status(401).json({ error }));
};

exports.deleteAnime = async (req, res) => {
  await Anime.deleteOne({ _id: req.params.id })
    .then((anime) => console.log(anime))
    .then(() => res.status(200).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneAnime = async (req, res) => {
  await Anime.findById({ _id: req.params.id })
    .then((anime) => res.status(200).json(anime))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAnime = async (req, res) => {
  await Anime.find()
    .then((anime) => res.status(200).json(anime))
    .catch((error) => res.status(400).json(error));
};
