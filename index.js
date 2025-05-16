const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running......");
});
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
