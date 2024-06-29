const mongoose = require("mongoose");
const ScoreSchema = mongoose.Schema({
  quizID: {
    type: String,
    required: false,
  },
  UserID: {
    type: String,
    required: true,
  },
  Score: {
   type:Number, 
    required: true,
  },

Type:{
    type:Number,//0 -- 1 --2 --3
    required:true
},
Semester:{
    type:String,
    required:true
}
});

const userModel = mongoose.model("Scores", ScoreSchema);

module.exports = userModel;
