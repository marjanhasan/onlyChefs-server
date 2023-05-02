const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const home = require("./data/home.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send(home);
});

app.listen(port, () => {
  console.log(`onlyChefs API is running on post: ${port}`);
});
