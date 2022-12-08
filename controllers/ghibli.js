const { Ghibli } = require("../models/ghibli");

exports.createghibli = async (req, res) => {
  await Ghibli.create({
    ...req.body,
  })
    .then((ghibli) => console.log(ghibli))
    .then(() => res.status(201).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyghibli = async (req, res) => {
  await Ghibli.updateOne({ _id: req.params.id }, { ...req.body })
    .then((ghibli) => console.log(ghibli))
    .then(() => res.status(200).json({ message: "opération réussie " }))
    .catch((error) => res.status(401).json({ error }));
};

exports.deleteghibli = async (req, res) => {
  await Ghibli.deleteOne({ _id: req.params.id })
    .then((ghibli) => console.log(ghibli))
    .then(() => res.status(200).json({ message: " opération réussie " }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneghibli = async (req, res) => {
  await Ghibli.findById({ _id: req.params.id })
    .then((ghibli) => res.status(200).json(ghibli))
    .catch((error) => res.status(400).json({ error }));
};

exports.getghibli = async (req, res) => {
  await Ghibli.find()
    .then((ghibli) => res.status(200).json(ghibli))
    .catch((error) => res.status(400).json(error));
};
