const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const animeRoutes = require("./routes/anime");
const tvRoutes = require("./routes/tv");
const ghibliRoutes = require("./routes/ghibli");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://evansJean:Azerty0987@cluster0.uvefquj.mongodb.net/streamingApi?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((database) => console.log(`database connecting ${database} `))
  .catch((error) => console.log(error.message));

app.use("/api/anime", animeRoutes);
app.use("/api/tv", tvRoutes);
app.use("/api/ghibli", ghibliRoutes);

module.exports = app;
