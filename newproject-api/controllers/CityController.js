let routes = require("express").Router();
let City = require("../models/City");



routes.get("/", async(req, res)=>{
    
    let result = await City.find()
    res.send(result);
})


module.exports = routes;