const mongoose = require("mongoose");
const QuizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Grade: {
    type: String,
    required: true,
  },
  // CategoryID: {
  //   type: String,
  //   required: true,
  // },
  CourseID: {
    type: String,
    required: true,
  },
  Type: {
    type: Number, //0 -- 1 --2 --3
    required: true,
  },
});

const QuizModel = mongoose.model("Quiz", QuizSchema);

module.exports = QuizModel;
