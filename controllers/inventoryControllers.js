const inventoryModel = require("../models/inventoryModel");
const warehouseModel = require("../models/warehouseModel");
const { v4: uuidv4 } = require('uuid');

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

//------- Add Item ----------
const addInventoryItem = (req, res) => {
  let inventory = inventoryModel.fetchInventoryData();
  let listOfWarehouses = warehouseModel.fetchWarehouseData();
  let selectedWarehouse = listOfWarehouses.find(warehouse => warehouse.name === req.body.warehouseName)
  let newInventoryItem = {
    id : uuidv4(),
    warehouseID: selectedWarehouse.id,
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status, 
    quantity: req.body.quantity
  }
  let newDataToAdd = [...inventory, newInventoryItem]
  inventoryModel.writeInventoryData(newDataToAdd)
  res.sendStatus(200)
};

//------- Update Item ----------
const updateInventoryItem = (req, res) => {
  objIndex = inventoryData.findIndex(inventoryItem => inventoryItem.id === req.body.id)
  let oldInventoryData = inventoryData;

  oldInventoryData[objIndex].warehouseID = req.body.warehouseID
  oldInventoryData[objIndex].warehouseName = req.body.warehouseName
  oldInventoryData[objIndex].itemName = req.body.itemName
  oldInventoryData[objIndex].description = req.body.description
  oldInventoryData[objIndex].category = req.body.category
  oldInventoryData[objIndex].status = req.body.status
  oldInventoryData[objIndex].quantity = req.body.quantity

  inventoryModel.writeInventoryData(oldInventoryData)
  res.sendStatus(200)

}


module.exports = {
  inventoryList,
  deleteInvetoryItem,
  inventoryItem,
  addInventoryItem,
  updateInventoryItem
};
