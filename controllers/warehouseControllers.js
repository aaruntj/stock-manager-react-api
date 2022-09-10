const warehouseModel = require("../models/warehouseModel");
const inventoryModel = require("../models/inventoryModel");
const { v4: uuidv4 } = require("uuid");

//--------- Warehouse Data ----------
let warehouseData = warehouseModel.fetchWarehouseData();

//------- Get all Warehouses List ----------
const warehouseList = (_req, res) => {
  res.status(200).json({
    status: "success",
    results: warehouseData.length,
    warehouseData,
  });
};

//------- Get a single warehouse ----------
const warehouseSingle = (req, res) => {
  const id = req.params.id;
  const warehouseSingle = warehouseData.find((i) => i.id === id);

  res.status(200).json({
    status: "sucess",
    warehouseSingle,
  });
};

// ---------- Get all inventory items for a Warehouse --------
const warehouseInventory = (req, res) => {
  const id = req.params.id;
  const warehouseInventory = inventoryData.filter(
    (list) => list.warehouseID === id
  );
  res.status(200).json({
    status: "success",
    warehouseInventory,
  });
};

// ---------- Delete Warehouse and ascociated inventory --------
const deleteWarehouse = (req, res) => {
  let warehouses = warehouseModel.fetchWarehouseData();
  let currentwarehouse = warehouses.find(
    (warehouse) => warehouse.id === req.params.id
  );
  warehouses.splice(warehouses.indexOf(currentwarehouse), 1);
  warehouseModel.writeWarehouseData(warehouses);
  let inventory = inventoryModel.fetchInventoryData();
  inventory = inventory.filter((item) => item.warehouseID !== req.params.id);
  inventoryModel.writeInventoryData(inventory);
  res.status(200).json(currentwarehouse);
};

module.exports = {
  warehouseList,
  warehouseSingle,
  warehouseInventory,
  deleteWarehouse,
};