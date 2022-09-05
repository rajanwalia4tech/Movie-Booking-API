const express = require('express');
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
env.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use("/api", routes);

app.listen(PORT, async() => {
    console.log("Server is running on port " + PORT);
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    }catch(err){
        console.log("Error in connecting to database",err);
    }
})