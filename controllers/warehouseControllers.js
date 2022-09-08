const warehouseModel = require("../models/warehouseModel");
const inventoryModel = require("../models/inventoryModel");
const { v4: uuidv4 } = require("uuid");

//example return list from warehouse file
// const warehouseList = (req, res) => {
//   let warehouse = warehouseModel.fetchWarehouseData();
//   return warehouse;
// };

//--------- Warehouse Data ----------
let warehouseData = warehouseModel.fetchWarehouseData();

//------- Get all Warehouses List ----------
const warehouseList = (_req, res) => {
	res
		.status(200)
		.json({
			status: "success",
			results: warehouseData.length,
			warehouseData
		});
};

// ---------- Get all inventory items for a Warehouse --------
const warehouseInventory = (req, res) => {
	const id = req.params.id;
	const warehouseInventory = inventoryData.filter((list) => list.warehouseID === id);
	res.status(200).json({
		status: "success",
		warehouseInventory
	});
};

module.exports = {
	warehouseList,
  warehouseInventory
};
