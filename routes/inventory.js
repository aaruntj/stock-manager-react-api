const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryControllers");

//Inventory list endpoint
//example return warehouselist
// router.route("/").get(inventoryController.inventoryList);

//Inventory detail endpoint
// router.route("/:id");

module.exports = router;
