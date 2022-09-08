const inventoryModel = require("../models/inventoryModel");
const { v4: uuidv4 } = require("uuid");

//--------- Inventory Data ----------
let inventoryData = inventoryModel.fetchInventoryData();

//------- Get all Inventory List ----------
const inventoryList = (_req, res) => {
  res.status(200).json({
    status: "sucess",
    results: inventoryData.length,
    inventoryData,
  });
};

// ---------- Get single Inventory Item --------
const inventoryItem = (req, res) => {
  const id = req.params.id;
  const inventoryItem = inventoryData.find((item) => item.id === id);

  res.status(200).json({
    status: "sucess",
    inventoryItem,
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
  inventoryItem,
};
