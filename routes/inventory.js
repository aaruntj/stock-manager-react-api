const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryControllers");

// --------- Inventory list endpoint --------

router.route("/list").get(inventoryController.inventoryList);

//------------ Inventory detail endpoint --------
router.route("/:id").delete(inventoryController.deleteInvetoryItem);

module.exports = router;
