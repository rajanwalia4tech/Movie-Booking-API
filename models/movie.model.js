const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:2
    },
    description:{
        type: String,
        required: true,
        minLength:5
    },
    genre:{
        type: String,
        required: true,
        minLength:2
    },
    casts:{
        type: [String],
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    trailerUrl:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        required: true,
        default: "English"
    },
    releaseDate:{
        type: Date,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    releaseStatus:{
        type: String,
        required: true,
        enum:["Upcoming", "Released"],
        default: "Released"
    },
},{timestamps:true});

const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;