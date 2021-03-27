const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });

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

var mailOptions = {
  from: "sami.benchaalia@sesame.com.tn",
  to: "desparosaminew@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
/////////////////////////
//// Hey Rbk here i'm setting new Users //
app.post("/users", (req, res) => {
  var array = [
    req.body.username,
    req.body.email,
    hash(req.body.password),
    req.body.Role,
  ];
  db.adduser(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
//////////////// Get all students ////////
app.get("/students", (req, res) => {
  db.getstudents((err, data) => {
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
  ];
  db.addCours(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
