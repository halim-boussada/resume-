const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });
var request = require("request").defaults({ rejectUnauthorized: false });

const cloudinary = require("cloudinary").v2;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { element } = require("protractor");

const hash = (pass) => bcrypt.hashSync(pass, 10);

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});

// ULOAD.ANY(0) TAKES ANY TYPE OF DATA
app.post("/upload", upload.any(0), (req, res) => {
  // REQ.FILES[0].PATH GIVE US THE PATH FROM THE LOCAL FOLDER WITH FILE NAME
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    // UPLOAD IMG TO CLOUDINARY
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
  // THE RESPONSE WILL HAVE ALL THE DATA ABOUT THE UPLOADED IMG WE ONLY NEED THE URL FOR NOW
});

//Mail SENDER
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sami.benchaalia@sesame.com.tn",
    pass: "1920vivaca",
  },
});

// var mailOptions = {
//   from: 'sami.benchaalia@sesame.com.tn',
//   to: 'desparosaminew@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
///////////////////////
//// Hey Rbk here i'm setting new Users //
app.post("/users", (req, res) => {
  var array = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.cohort,
    req.body.Role,
  ];
  db.adduser(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });

  let mailOptions = {
    from: "sami.benchaalia@sesame.com.tn",
    to: req.body.email,
    subject: "Welcome To Rbk Platform",
    text:
      "Dear" +
      req.body.username +
      "To login in your Account Please use this username :" +
      req.body.username +
      "and password" +
      req.body.password,
    tls: {
      rejectUnauthorized: false,
    },
    secure: false,
  };
  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });
});

//////////////// Get all students ////////
app.get("/students", (req, res) => {
  db.getstudents((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/oneCours/:id", (req, res) => {
  db.getoneCours([req.params.id], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////// Get all instractors ////////

app.get("/instractor", (req, res) => {
  db.getInstructors((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////// Get all coursCreators ////////
app.get("/courscreator", (req, res) => {
  db.getCoursCreator((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/allcourses", (req, res) => {
  db.getallCourses((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
/////////// Set Cohort

app.post("/Cohort", (req, res) => {
  var array = [req.body.Cohort, req.body.id];
  db.assignCohort(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
//////////////Set Cours
app.post("/Cours", (req, res) => {
  var array = [
    req.body.content,
    req.body.nameCours,
    req.body.videoUrl,
    req.body.imageUrl,
    req.body.Cohort,
    req.body.Creator,
  ];
  db.addCours(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/visibility", (req, res) => {
  var array = [req.body.visibility, req.body.id];
  db.updatevisibility(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
/////////////auaathentification////////////

app.put("/updateCC/:id", (req, res) => {
  var array = [req.body.cohort, req.params.id];
  db.assignCohort(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/updatepassword", (req, res) => {
  var array = [req.body.password, req.body.id];
  db.updatepassword(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/login", (req, res) => {
  var array = [req.body.username, req.body.password];
  db.logusers(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.delete("/delete/:id", (req, res) => {
  var array = [req.params.id];
  db.deleteUser(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.listen(port, () => console.log(`server is listening on port ${port}`));
