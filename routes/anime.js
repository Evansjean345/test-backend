const express = require("express");
const router = express.Router();
const anime = require("../controllers/anime");
const multer = require("../middlewares/multer-config");

router.post("/", multer, anime.createAnime);
router.put("/:id", multer, anime.modifyAnime);
router.delete("/:id", anime.deleteAnime);
router.get("/:id", anime.getOneAnime);
router.get("/", anime.getAnime);

module.exports = router;
