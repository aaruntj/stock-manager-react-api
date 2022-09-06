const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseControllers");

//Warehouse list endpoint

//example return warehouselist
// router.route("/").get(warehouseController.warehouseList);

//Warehouse detail endpoint
// router.route("/:id");

module.exports = router;
