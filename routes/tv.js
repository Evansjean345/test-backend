const express = require("express");
const router = express.Router();
const tv = require("../controllers/tv");
const multer = require("../middlewares/multer-config");

router.post("/", multer, tv.createtv);
router.put("/:id", multer, tv.modifytv);
router.delete("/:id", tv.deletetv);
router.get("/:id", tv.getOnetv);
router.get("/", tv.gettv);

module.exports = router;
