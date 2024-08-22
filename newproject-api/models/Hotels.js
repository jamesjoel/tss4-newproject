require("../config/db");

let mongoose = require("mongoose");

let HotelSchema = mongoose.Schema({
    
    destiname : String,
    name : String,
    image : String
    
})

let Hotel = mongoose.model("hotel", HotelSchema);

module.exports = Hotel;