const { Tv } = require("../models/tv");

exports.createtv = async (req, res) => {
  await Tv.create({
    ...req.body,
  })
    .then((tv) => console.log(tv))
    .then(() => res.status(201).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifytv = async (req, res) => {
  await Tv.updateOne({ _id: req.params.id }, { ...req.body })
    .then((tv) => console.log(tv))
    .then(() => res.status(200).json({ message: "opération réussie " }))
    .catch((error) => res.status(401).json({ error }));
};

exports.deletetv = async (req, res) => {
  await Tv.deleteOne({ _id: req.params.id })
    .then((tv) => console.log(tv))
    .then(() => res.status(200).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnetv = async (req, res) => {
  await Tv.findById({ _id: req.params.id })
    .then((tv) => res.status(200).json(tv))
    .catch((error) => res.status(400).json({ error }));
};

exports.gettv = async (req, res) => {
  await Tv.find()
    .then((tv) => res.status(200).json(tv))
    .catch((error) => res.status(400).json(error));
};
