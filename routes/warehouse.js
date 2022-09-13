const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseControllers");

//Warehouse list endpoint
router
  .route("/")
  .get(warehouseController.warehouseList)
  .post(warehouseController.addWarehouse);

//Warehouse detials endpoint
router
  .route("/:id")
  .get(warehouseController.singleWarehouse)
  .put(
    warehouseController.checkFields,
    warehouseController.fieldValidation,
    warehouseController.editWareHouse
  )
  .delete(warehouseController.deleteWarehouse);

// Warehouse inventory detail endpoint
router.route("/:id/inventory").get(warehouseController.warehouseInventory);

module.exports = router;
