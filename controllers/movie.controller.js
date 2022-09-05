const Movie = require("../models/movie.model");

const getMovies = async (req, res) => {
    let temp = {
        name : "Avengers",
        description : "Avengers Endgame",
        duration:121,
        releaseDate: new Date("2019-04-26"),
        genre: "Action",
        language: "English",
        director:"Anthony Russo",
        casts : ["Tom Holland","Robert Downey Jr","Chris Evans"],
        trailerUrl : "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    }
    await Movie.create(temp);
    return res.send("Hello World");
}

module.exports = {
    getMovies
}