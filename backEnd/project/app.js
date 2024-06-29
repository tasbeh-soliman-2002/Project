const express = require("express"); //create Server
require("dotenv").config(); //keys in enviroment
const bodyParser = require("body-parser"); //
const cookieParser = require("cookie-parser"); //save data in browser
const session = require("express-session"); //create session
const morgan = require("morgan"); //resourses
const helmet = require("helmet"); //fake headers
const http = require("http");
const fs = require("fs"); //filing
const cors = require("cors");
const xss = require("xss-clean"); //security
const compression = require("compression");
const mongoos = require("mongoose");
const app = express();
const UsersModel = require("./Models/Users");
// const csurf = require('csurf');
// const csrfMiddleware = csurf({ cookie: true });
app.use(
  cors({
    origin: "*", // set the allowed origin
    // methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'], // set the allowed HTTP methods
    // allowedHeaders: ['Content-Type'], // set the allowed headers
    //  credentials: true // set the allowed credentials
  })
);
app.use(xss());
app.use(compression());
// app.use(csrfMiddleware);

// set our application port
app.set("port", 3001);
app.set("trust proxy", 1);

// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoos
  .connect("mongodb://0.0.0.0:27017/sience", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex:true,
    //useFindAndModify:false
  })
  .then(() => {
    console.log("Mongodb connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: false,
  })
);

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());
// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: process.env.secretkey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax",
      secure: false,
      maxAge: 8600000,
    },
  })
);

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});
//check login
let sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect("/");
  } else {
    next();
  }
};
app.use(express.static("public"));

//login
app
  .route("/login")
  .get(sessionChecker, (req, res) => {
    console.log("hello");
    res.set("Access-Control-Allow-Origin", "*");
    // res.sendFile(__dirname + "/public/login.html");
  })
  .post(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");

    try {
      const user = await UsersModel.findOne({
        Email: req.body.Email,
        Password: req.body.Password,
      }).exec();
      console.log(req.body);
      if (!user) {
        console.log("no user");
        return res.send("error");
        // return res.redirect("/login");
      }

      req.session.user = user;
      res.status(200).send(user);

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  });

const path = require("path");
//sync database
let sessionChecker2 = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    return res.send("error");

    // res.redirect("/login");
  } else {
    next();
  }
};
app.get("/", sessionChecker2, (req, res) => {
  let user = req.session.user;
  // console.log(user);
  res.status(200).json({ user });
});
const AdminRoute = require("./Routes/Admin");
app.use("/admin", AdminRoute); //loalhost:port/admin/newcategory
app.get("/logout", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie("user_sid");
    res.clearCookie("userData");
    // res.redirect("/");
  } else {
    // console.log("logout");
    res.send("logout");
    res.redirect("/login");
  }
});

//get post patch delete

// route for handling 404 requests(unavailable routes)
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(404).send("Sorry can't find that!");
});
const httpServer = http.createServer(app);

//set routes

// start the express server
httpServer.listen(app.get("port"), () =>
  console.log(`App started on port ${app.get("port")}`)
);
