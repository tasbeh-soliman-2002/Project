const ScoreModel = require("../Models/Scores");
const UserModel = require("../Models/Users");
// const CourseModel = require("../Models/Courses");
//ADD
const addNewCategory = async (req, res) => {
  let catgeory = req.body;

  let newCategory = new ScoreModel(catgeory);
  newCategory
    .save()
    .then((e) => {
      res.status(200).send("Added new category Succesfully");
    })
    .catch((err) => {
      for (let e in err.errors) {
        console.log(err.errors[e].message);
        res.status(400).send("Bad Request...");
      }
    });
};

//Edit

const updateCategory = async (req, res) => {
  const catgeory = await ScoreModel.findByIdAndUpdate(
    req.params.id,
    req.body
  ).exec();
  if (!catgeory) {
    return res.status(404).send("not found");
  }
  res.status(200).send("updated succefuly");
};

//Delete
const deleteCategory = async (req, res) => {
  const catgeory = await ScoreModel.findByIdAndDelete(
    req.params.id,
    req.body
  ).exec();
  if (!catgeory) {
    return res.status(404).send("not found");
  }
  res.status(200).send("deleted succefuly");
};
//get
const getCategory = async (req, res) => {
  const catgeory = await ScoreModel.findById(req.params.id).exec();
  if (!catgeory) {
    return res.status(404).send("not found");
  }
  res.status(200).send(catgeory);
};
const getAllCategory = async (req, res) => {
  const catgeory = await ScoreModel.find({}).exec();
  if (!catgeory) {
    return res.status(404).send("not found");
  }
  res.status(200).send(catgeory);
};
//scores for quiz
const Scores = async (req, res) => {
  const quizscores = await ScoreModel.find({ quizID: req.body.quizID }).exec();
  if (!quizscores) {
    return res.status(404).send("not founded.....");
  }
  let UserIDs = [];
  quizscores.map((e) => {
    UserIDs.push(e.UserID);
  });
  let Users = await UserModel.find({ _id: { $in: UserIDs } }).exec();
  if (!Users) {
    return res.status(404).send("not founded.....");
  }
  Users.map((e) => {
    quizscores.map((i) => {
      if (e._id.toString() === i.UserID.toString()) {
        e.Score = i.Score;
      }
    });
  });
  return res.status(200).send(Users);
};
const Scores2 = async (req, res) => {
  const quizscores = await ScoreModel.find({
    Semester: req.body.Semester,
  }).exec();
  if (!quizscores) {
    return res.status(404).send("not founded.....");
  }
  let UserIDs = [];
  quizscores.map((e) => {
    UserIDs.push(e.UserID);
  });
  let uniqueUserIDs = [...new Set(UserIDs)];
  let Users = await UserModel.find({ _id: { $in: uniqueUserIDs } }).exec();
  if (!Users) {
    return res.status(404).send("not founded.....");
  }
  Users.map((e) => {
    quizscores.map((i) => {
      if (e._id.toString() === i.UserID.toString()) {
        if (i.Type == 0) {
          e.midScore = i.Score;
        } else if (i.Type == 1) {
          e.ParactScore = i.Score;
        } else if (i.Type == 2) {
          e.normalScore = i.Score;
        } else if (i.Type == 3) {
          e.OralScore = i.Score;
        } else if (i.Type == 4) {
          e.FinalScore = i.Score;
        }
      }
    });
  });
  return res.status(200).send(Users);
};

// Convert ObjectId to string
module.exports = {
  addNewCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
  Scores,
  Scores2,
};
