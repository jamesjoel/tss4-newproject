require("../config/db");

let mongoose = require("mongoose");

let CitySchema = mongoose.Schema({
    
    name : String,
    image : String
    
})

let City = mongoose.model("city", CitySchema);

module.exports = City;