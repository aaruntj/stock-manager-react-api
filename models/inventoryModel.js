const fs = require("fs");

//Read inventory data
const fetchInventoryData = () => {
  let inventoryList = JSON.parse(fs.readFileSync("./data/inventories.json"));
  return inventoryList;
};

//Write inventory data
const writeInventoryData = (data) => {
  fs.writeFileSync("./data/inventories.json", JSON.stringify(data));
};

module.exports = { fetchInventoryData, writeInventoryData };
