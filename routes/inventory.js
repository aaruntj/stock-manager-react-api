const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryControllers");

//Inventory list endpoint
router
	.route("/")
	.get(inventoryController.inventoryList)
	.post(inventoryController.addInventoryItem)
	.put(inventoryController.updateInventoryItem);

//Inventory detail endpoint
router
	.route("/:id")
	.get(inventoryController.inventoryItem)
	.delete(inventoryController.deleteInvetoryItem);

module.exports = router;
