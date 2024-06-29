const mongoose = require("mongoose");
const quistionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  quizid: {
    type: String,
    required: true,
  },
  options: {
    type: [{}],
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  score: {
    type: Number,
    required: true,
  },
  solution: {
    type: Number,
    required: true,
  },
  Type: {
    type: Number, //0 -- 1 --2 --3
    required: true,
  },
});

const userModel = mongoose.model("Quistons", quistionSchema);

module.exports = userModel;
