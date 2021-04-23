const express = require("express");
const app = express();

app.listen(8082, () => {
  console.log("Server running on port 8082");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

