const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryControllers");

// --------- Inventory list endpoint --------

router.route("/list").get(inventoryController.inventoryList);

//------------ Inventory details endpoint --------
router.route("/:id").get(inventoryController.inventoryItem);

module.exports = router;
