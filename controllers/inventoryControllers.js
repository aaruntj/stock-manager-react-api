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

module.exports = {
	inventoryList,
};
