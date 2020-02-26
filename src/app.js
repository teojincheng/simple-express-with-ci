const express = require("express");
const app = express();
app.use(express.json());

const triangularNumberSequence = [1, 3, 6, 10, 15, 21, 28, 36, 45];
const EXPONENT = 8;

app.get("/", async (req, res) => {
  res.status(200).send(triangularNumberSequence);
});

app.get("/:number", async (req, res) => {
  let result = Math.pow(parseInt(req.params.number), EXPONENT);
  res.status(200).json(result);
});

module.exports = app;
