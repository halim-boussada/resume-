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
//get the userId
const getUserId = function (username) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select id from users where username=${username}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
// get all organizations of user
const getOrganization = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where userID=${userID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
/*****create new organization *****/
const createOrganization = function (userID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO organizations set ?`,
      { name, description, userID },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
//get all projet of organizations
const getOrgProjects = function (orgId) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where organizationID=${orgId}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
//Create new project
const createProject = function (userID, organizationID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO projects set ?`,
      { name, description, organizationID, userID },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
const getAllData = (callback) => {
  connection.query("select * from users", (err, data) => {
    if (err) throw callback(err);
    console.log({ data });
    callback(null, data);
  });
};
const postData = (user, callback) => {
  let sql = `insert into users(fullname, username, secretinfo, password) values (?,?,?,?) `;
  connection.query(sql, user, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
const login = (callback) => {
  connection.query("select username, password from users", (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
const forgetPass = (callback) => {
  connection.query("select username, secretinfo from users", (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
const updatePass = (arr, callback) => {
  let sql = `UPDATE users SET password = ?  WHERE secretinfo = ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw err;
    callback(null, data);
  });
};
const deleteUser = (username, callback) => {
  let sql = `DELETE FROM users WHERE username = '${username}'`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let createIssues = (arr, callback) => {
  var sql = `insert into issues (title, description, state, posterID, projectID) values (?,?,?,?,?);`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let getIssues = (projectID, callback) => {
  var sql = `select * from issues where projectID = ?`;
  connection.query(sql, projectID, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let updateIssues = (arr, callback) => {
  var sql = `UPDATE issues SET state = ? WHERE projectID = ? and title = ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let deleteIssues = (title, callback) => {
  var sql = `DELETE FROM issues WHERE title = ?`;
  connection.query(sql, title, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let createFeature = (arr, callback) => {
  var sql = `insert into features (title, description, state, posterID, projectID) values (?,?,?,?,?);`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let getFeature = (projectID, callback) => {
  var sql = `select * from features where projectID = ?`;
  connection.query(sql, projectID, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let updateFeature = (arr, callback) => {
  var sql = `UPDATE features SET state = ? WHERE projectID = ? and title =?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let deleteFeature = (title, callback) => {
  var sql = `DELETE FROM features WHERE title = ?`;
  connection.query(sql, [title], (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
///select all usersName
const getUserName = function () {
  return new Promise((resolve, reject) => {
    connection.query(`select username, id from users`, (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};
///Ad new users to the organisation
const AddNewUsersToOrg = function (userID, orgID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO useOrg set ?`,
      { userID, orgID },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
///get organizations where other users add this user
const getOtherOrg = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations, useorg where useorg.userID=${userID} and useorg.orgID = organizations.id`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
////Send Message
const sendMsg = function (userID, messagetext, username) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into globalChat set ?`,
      { userID, messagetext, username },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
//get msg from
const getAllMsg = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from globalchat", (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};
module.exports = {
  getAllMsg,
  sendMsg,
  getOtherOrg,
  AddNewUsersToOrg,
  getUserName,
  getUserId,
  createProject,
  getAllData,
  postData,
  login,
  forgetPass,
  deleteUser,
  updatePass,
  getOrganization,
  getOrgProjects,
  createOrganization,
  createIssues,
  getIssues,
  updateIssues,
  deleteIssues,
  createFeature,
  getFeature,
  updateFeature,
  deleteFeature,
};