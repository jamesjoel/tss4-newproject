let routes = require("express").Router();
let Hotel = require("../models/Hotels");



routes.get("/", async(req, res)=>{
    
    let result = await Hotel.find()
    res.send(result);
})

routes.get("/:a", async(req, res)=>{
    let x = req.params.a;
    
    let result = await Hotel.find({ destiname : x })
    res.send(result);
})


module.exports = routes;