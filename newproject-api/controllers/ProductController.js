let routes = require("express").Router();
let Product = require("../models/Product");


routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
    
})
routes.get("/latest", async(req, res)=>{
    let result = await Product.find().sort({ _id : -1 }).limit(3);
    res.send(result);
})



module.exports = routes;