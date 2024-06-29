const mongoose = require("mongoose");
const CoursesSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Grade: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

const CourseModel = mongoose.model("Courses", CoursesSchema);

module.exports = CourseModel;
