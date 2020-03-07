const express = require("express");
const app = express();

const Customer = require("./models/customer.model");
const cors = require("cors");

const corsOptions = {
  origin: [process.env.FRONTEND_LOCALHOST, process.env.EDITOR_HEROKU_URL],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

const findAll = async () => {
  const collectionOfCustomers = await Customer.find();
  return collectionOfCustomers;
};

const createCustomer = async customer => {
  await Customer.init();
  const doc = Customer(customer);
  await doc.save();
};

const triangularNumberSequence = [1, 3, 6, 10, 15, 21, 28, 36, 45];
const EXPONENT = 8;
//const PI = 3.14159265359;

app.get("/customers", async (req, res) => {
  const collection = await findAll();
  res.status(200).send(collection);
});

app.get("/pi", async (req, res) => {
  res.status(200).json("PI is 3.14");
});

app.get("/", async (req, res) => {
  res.status(200).send(triangularNumberSequence);
});

app.get("/:number", async (req, res) => {
  let result = Math.pow(parseInt(req.params.number), EXPONENT);
  res.status(200).json(result);
});

app.post("/customers", async (req, res) => {
  await createCustomer(req.body);
  res.status(201).send(req.body);
});

module.exports = app;
