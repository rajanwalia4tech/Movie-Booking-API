const Theatre = require("../models/theatre.model");
const Movie = require("../models/movie.model");

const getTheatre = async (req, res) => {
    const [movie] = await Movie.find();

    let temp = {
        name : "Dimple cinema",
        address : "Yamuna Nagar",
        city : "Yamuna Nagar",
        pinCode: 135001,
        description :"Dimple cinema is a theatre in Yamuna Nagar",
        movies : movie._id
    }
    Theatre.create(temp);
    return res.send("Hello Theatre");
}

module.exports={
    getTheatre
}