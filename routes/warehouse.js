const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseControllers");

//Warehouse list endpoint

//example return warehouselist
router.route("/").get(warehouseController.warehouseList);

router

	.route("/:id")
	.get(warehouseController.singleWarehouse)
	.put(
		warehouseController.checkFields,
		warehouseController.fieldValidation,
		warehouseController.editWareHouse
	)
	.delete(warehouseController.deleteWarehouse);

// Warehouse detail endpoint
router.route("/:id/inventory").get(warehouseController.warehouseInventory);

module.exports = router;
