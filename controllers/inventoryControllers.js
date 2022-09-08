const inventoryModel = require("../models/inventoryModel");
const { v4: uuidv4 } = require("uuid");

//------- Get all Inventory List ----------
const inventoryList = (req, res) => {
  let inventory = inventoryModel.fetchInventoryData();
  res.status(200).json({
    status: "sucess",
    results: inventory.length,
    inventory,
  });
};

//------- Delete Item ----------
const deleteInvetoryItem = (req, res) => {
  let inventory = inventoryModel.fetchInventoryData();
  const currentItem = inventory.find((item) => item.id === req.params.id);
  inventory.splice(inventory.indexOf(currentItem), 1);
  inventoryModel.writeInventoryData(inventory);
  res.status(200).json(currentItem);
};

module.exports = {
  inventoryList,
  deleteInvetoryItem,
};
