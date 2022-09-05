const express = require("express");
const router = express.Router();
const theatreController = require("../controllers/theatre.controller");
router.get("/",theatreController.getTheatre);

module.exports = router;