const express = require("express");
const app = express();
const cors = require("cors");
const inventoryRoute = require("./routes/inventory");
const warehouseRoute = require("./routes/warehouse");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

//Cors Middleware
app.use(cors());

//Middleware to accces the body of the request
app.use(express.json());

//Warehouse route
app.use("/", warehouseRoute);
//Inventory route
app.use("/inventory", inventoryRoute);

app.listen(PORT, () => {
	console.log("Running on: " + PORT);
	console.log("URL: " + BACKEND_URL);
});

app.get("/", (req, res) => {
  console.log("Recieved");
  res.send("response is here!!");
})