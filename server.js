const express = require("express");
const app = express();

const server = app.listen(0, () => {
  console.log('Listening on port:', server.address().port);
});


app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

