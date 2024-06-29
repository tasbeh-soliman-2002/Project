const express = require("express");
const CategoryController = require("../Controller/Category");
const UsersController = require("../Controller/Users");
const CoursesController = require("../Controller/Course");
const VideoController = require("../Controller/Videos");
const PdfController = require("../Controller/Pdf");
const route = express.Router();
const QuestionsController = require("../Controller/Question");
const ScoresController = require("../Controller/Scores");
const QuizController = require("../Controller/Quiz");

module.exports = route;
//category
route.post("/newcategory", CategoryController.addNewCategory);
route.patch("/updatecategory/:id", CategoryController.updateCategory);
route.delete("/deletecategory/:id", CategoryController.deleteCategory);
route.get("/onecategory/:id", CategoryController.getCategory);
route.get("/allcategories", CategoryController.getAllCategory);

//users
route.post("/newuser", UsersController.addNewUser);
route.patch("/updateyser/:id", UsersController.updateUser);
route.delete("/deleteuser/:id", UsersController.deleteUser);
route.get("/oneuser/:id", UsersController.getUser);
route.get("/allusers", UsersController.getAllUsers);

//course
route.post("/newcourse", CoursesController.addNewcourse);
route.patch("/updatecourse/:id", CoursesController.updatecourse);
route.delete("/deletecourse/:id", CoursesController.deletecourse);
route.get("/onecourse/:id", CoursesController.getcourse);
route.get("/allcoursies", CoursesController.getAllcourse);

//videos
route.post("/newvideo", VideoController.addNewCategory);
route.patch("/updatevideo/:id", VideoController.updateCategory);
route.delete("/deletevideo/:id", VideoController.deleteCategory);
route.get("/onevideo/:id", VideoController.getCategory);
route.get("/allvideos", VideoController.getAllCategory);

//pdf
route.post("/newpdf", PdfController.addNewCategory);
route.patch("/updatepdf/:id", PdfController.updateCategory);
route.delete("/deletepdf/:id", PdfController.deleteCategory);
route.get("/onepdf/:id", PdfController.getCategory);
route.get("/allpdfs", PdfController.getAllCategory);

//quiz
route.post("/newquiz", QuizController.addNewCategory);
route.patch("/updatequiz/:id", QuizController.updateCategory);
route.delete("/deletequiz/:id", QuizController.deleteCategory);
route.get("/onequiz/:id", QuizController.getCategory);
route.get("/allquiz/:id", QuizController.getAllCategory);
//scores
route.post("/newcscore", ScoresController.addNewCategory);
route.patch("/updatescore/:id", ScoresController.updateCategory);
route.delete("/deletescore/:id", ScoresController.deleteCategory);
route.get("/onescore/:id", ScoresController.getCategory);
route.get("/allscores", ScoresController.getAllCategory);
//get scores for quiz
route.post("/getquizscore", ScoresController.Scores);
//get report
route.post("/report", ScoresController.Scores2);
//questions
route.post("/newQuestion", QuestionsController.addNewCategory);
route.patch("/updateQuestion/:id", QuestionsController.updateCategory);
route.delete("/deleteQuestion/:id", QuestionsController.deleteCategory);
route.get("/oneQuestion/:id", QuestionsController.getCategory);
route.get("/allQuestions/:id", QuestionsController.getAllCategory);
