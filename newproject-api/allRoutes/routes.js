let routes = require("express").Router();


routes.use("/api/v1/city", require("../controllers/CityController"));
routes.use("/api/v1/destination", require("../controllers/DestinationController"));
routes.use("/api/v1/hotels", require("../controllers/HotelController"));
// routes.use("/api/v1/product", require("../controllers/ProductController"));
// routes.use("/api/v1/category", require("../controllers/CategoryController"));

module.exports = routes;