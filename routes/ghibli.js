const express = require("express");
const router = express.Router();
const ghibli = require("../controllers/ghibli");
const multer = require("../middlewares/multer-config");

router.post("/", multer, ghibli.createghibli);
router.put("/:id", multer, ghibli.modifyghibli);
router.delete("/:id", ghibli.deleteghibli);
router.get("/:id", ghibli.getOneghibli);
router.get("/", ghibli.getghibli);

module.exports = router;
