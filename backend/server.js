const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./data.js");

//use cors without installing it
app.use(cors());
app.use(express.json());


app.get("/api/products", (req, res) => {
  console.log(products)
   res.send(products);
});
const port = process.env.PORT || 4300;
app.listen(port, () => {
  console.log("The server is running");
});
