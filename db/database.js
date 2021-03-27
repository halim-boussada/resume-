const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

/////////////////////////////////////////////////////////////////////////Authentification////////////
const adduser = (arr, callback) => {
  let sql = "insert into users (username,email,password,Role) values (?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const getstudents = (callback) => {
  let sql = `select * from users where Role="student";`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const getInstructors = (callback) => {
  let sql = `select * from users where Role="instructor";`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const getCoursCreator = (callback) => {
  let sql = `select * from users where Role="courscreator";`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const assignCohort = (arr, callback) => {
  let sql = "UPDATE users SET Cohort = ?  WHERE id= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
let verificationRequestCompany = (arr, callback) => {
  var sql = "UPDATE companies SET verRequest = ?  WHERE name= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
const addCours = (arr, callback) => {
  let sql =
    "insert into Courses ( content ,nameCours,videoUrl,imageUrl ,Cohort )  values (?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};

module.exports = {
  adduser,
  getstudents,
  getInstructors,
  getCoursCreator,
  assignCohort,
  addCours,
};
