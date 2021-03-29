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
  let sql =
    "insert into users (username,email,password,Cohort,Role) values (?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const getallusers = (callback) => {
  let sql = `select * from users;`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};

const getallCourses = (callback) => {
  let sql = `select * from Courses;`;
  connection.query(sql, (err, data) => {
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
  let sql = `select * from users where Role="Instractor";`;
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

const modifyCours = (arr, callback) => {
  let sql =
    "UPDATE Courses SET content = ? , nameCours  = ? , videoUrl  = ?, imageUrl  = ?,Cohort  = ?  WHERE id= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};

const deleteCours = (arr, callback) => {
  let sql = "DELETE FROM Courses WHERE id = ?";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const deleteUser = (arr, callback) => {
  let sql = "DELETE FROM users WHERE id = ?";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const getoneCours = (arr, callback) => {
  let sql = "select * FROM Courses WHERE id = ?";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const addCours = (arr, callback) => {
  let sql =
    "insert into Courses ( content ,nameCours,videoUrl,imageUrl ,Cohort ,Creator )  values (?,?,?,?,?,?);";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const logusers = (arr, callback) => {
  let sql = "select * from users where username = ? and password=?";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
//////////////Update PASSWORD /////////
const updatepassword = (arr, callback) => {
  let sql = "UPDATE users SET password= ? , firstTime = false where id=?";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
const updatevisibility = (arr, callback) => {
  let sql = "UPDATE Courses SET visibility = ?  WHERE id= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};
module.exports = {
  updatevisibility,
  updatepassword,
  getoneCours,
  getallCourses,
  deleteUser,
  deleteCours,
  modifyCours,
  adduser,
  getstudents,
  getInstructors,
  getCoursCreator,
  assignCohort,
  addCours,
  getallusers,
  logusers,
};
