let routes = require("express").Router();
let Desti = require("../models/Destination");



routes.get("/", async(req, res)=>{
    
    let result = await Desti.find()
    res.send(result);
})

routes.get("/:a", async(req, res)=>{
    let x = req.params.a;
    
    let result = await Desti.find({ city : x })
    res.send(result);
})


module.exports = routes;