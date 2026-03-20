const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100
  },
  {
    id: 2,
    name: "Product 2",
    price: 200
  }
];

// API route
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});