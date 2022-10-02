const mongoose = require("mongoose");

const scheema = new mongoose.Schema({
  message: {
    type: String,
    require: [true, "empty message cant be sent"],
  },
  sentby: {
    type: Number,
    required: [true, "sentby number is necessary"],
  },
  sentto: {
    type: Number,
    required: [true, "sentto number is necessary"],
  },
  date: {
    type: String,
    required: [true, "date is necessary"],
  },
  read: Boolean,
});

const database = mongoose.model("2users", scheema);

module.exports = database;
