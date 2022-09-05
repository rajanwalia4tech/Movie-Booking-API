const express = require("express");
const router = express.Router();
const movieRoutes = require("./movie.routes");
const theatreRoutes = require("./theatre.routes");

router.use("/movies", movieRoutes);
router.use("/theatres", theatreRoutes);

module.exports = router;