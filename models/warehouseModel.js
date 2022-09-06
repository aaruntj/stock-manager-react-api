const fs = require("fs");

//Read warehouse data
const fetchWarehouseData = () => {
  let warehouseList = JSON.parse(fs.readFileSync("./data/warehouses.json"));
  return warehouseList;
};

//Write warehouse data
const writeWarehouseData = (data) => {
  fs.writeFileSync("./data/warehouses.json", JSON.stringify(data));
};

module.exports = { fetchWarehouseData, writeWarehouseData };