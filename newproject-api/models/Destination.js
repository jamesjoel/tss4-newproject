require("../config/db");

let mongoose = require("mongoose");

let DestiSchema = mongoose.Schema({
    
    name : String,
    city : String,
    image : String,
    detail : String
    
})

let Desti = mongoose.model("destination", DestiSchema);

module.exports = Desti;
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus voluptatum quo tempora, impedit expedita reprehenderit ratione quod accusantium itaque harum quae provident temporibus totam architecto doloribus eos quis aspernatur!