const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:2
    },
    description : String,
    city:{
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    address: String,
    movies:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Movie",
    }
});

const Theatre = mongoose.model("Theatre",theatreSchema);

module.exports = Theatre;