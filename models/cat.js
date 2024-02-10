const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: number, required: true },
  // publishedDate: { type: Date, required: true },
});

module.exports = mongoose.model("Cat", catSchema);
