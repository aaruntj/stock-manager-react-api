const inventoryModel = require("../models/inventoryModel");
const { v4: uuidv4 } = require("uuid");

//example return list from inventory file
// const inventoryList = (req, res) => {
//   let inventory = inventoryModel.fetchInventoryData();
//   return inventory;
// };

//--------- Inventory Data ----------
let inventoryData = inventoryModel.fetchInventoryData();

//------- Get all Inventory List ----------
const inventoryList = (_req, res) => {
	res.status(200).json({
		status: "success",
		inventoryData,
	});
};


// ---------- Get all inventory items for a Warehouse --------
const inventoryWarehouse = (req, res) => {
	const id = req.params.id;
	const inventoryWarehouse = inventoryData.filter((list) => list.warehouseID === id);
	res.status(200).json({
		status: "success",
		inventoryWarehouse
	});
};

module.exports = {
	inventoryList,
  inventoryWarehouse
};