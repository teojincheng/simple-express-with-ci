const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
