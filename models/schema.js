const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  item1: {
    type: String,
    required: true,
  },
  item2: { type: String },
});

// working with users collection on mongo atlas
module.exports = mongoose.model("TestModel", testSchema, "users");
