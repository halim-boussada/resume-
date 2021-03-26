const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;
const db = require("./db/database.js");

// const auth = require("express").Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get userId
app.get("/user/:username", async (req, res) => {
  try {
    const userData = await db.getUserId(req.params.username);
    res.status(200).send(userData[0]);
  } catch (err) {
    console.error(err);
  }
});

/**
 * Get all organizations by user
 */
app.get("/organization/:userID", async (req, res) => {
  try {
    const data = await db.getOrganization(req.params.userID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//get all the project of an organization
app.get("/getOrgProject/:orgID", async (req, res) => {
  try {
    const data = await db.getOrgProjects(req.params.orgID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

/**
 * Creates a new organization
 *
 */
app.post("/organization/:userID", async (req, res) => {
  try {
    await db.createOrganization(
      req.body.userID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

/**
 * Creates a new project
 *
 */
app.post("/getOrgProject/:orgID", async (req, res) => {
  try {
    await db.createProject(
      req.body.userID,
      req.body.organizationID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

const hash = (pass) => bcrypt.hashSync(pass, salt);

app.post("/addUsers", (req, res) => {
  let data = req.body;
  console.log(data);
  let users = [
    data.fullname,
    data.username,
    hash(data.secretinfo),
    hash(data.password),
  ];
  db.postData(users, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/getUser", (req, res) => {
  db.getAllData((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/login", (req, res) => {
  console.log("aaa", req.body);
  db.login((err, data) => {
    let person = data;
    if (err) throw err;
    let arr = person.map(
      (element) =>
        req.body.username === element.username &&
        bcrypt.compareSync(req.body.password, element.password)
    );
    res.send(arr.includes(true));
  });
});

app.post("/forgetPassword", (req, res) => {
  console.log("body", req.body);
  db.forgetPass((err, data) => {
    let person = data;
    if (err) throw err;
    let arr = person.map(
      (element) =>
        req.body.username === element.username &&
        bcrypt.compareSync(req.body.secretinfo, element.secretinfo)
    );
    console.log(arr);
    if (arr.includes(true)) {
      db.updatePass(
        [hash(req.body.newPassword), hash(req.body.secretinfo)],
        (err, data) => {
          console.log("haloum");
          if (err) throw err;
          res.send(data);
        }
      );
    } else {
      res.send("something wrong");
    }
  });
});

app.post("/deleteuser", (req, res) => {
  db.deleteUser(req.body.username, (err, data) => {
    if (err) throw err;
    res.send(`${req.body.username} removed`);
  });
});

app.post("/addIssue", (req, res) => {
  let body = req.body;
  let arr = [
    body.title,
    body.description,
    body.state,
    body.posterID,
    body.projectID,
  ];
  db.createIssues(arr, (err, data) => {
    if (err) throw err;
    res.send(`${arr[0]} created sucssefully`);
  });
});

app.post("/projectIssues", (req, res) => {
  db.getIssues(req.body.projectID, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/updateIssues", (req, res) => {
  let arr = [req.body.newState, req.body.projectID, req.body.title];
  db.updateIssues(arr, (err, data) => {
    if (err) throw err;
    res.send("issue is up to date");
  });
});

app.post("/deleteIssues", (req, res) => {
  db.deleteIssues(req.body.title, (err, data) => {
    if (err) throw err;
    res.send("issue removed");
  });
});

app.post("/addFeature", (req, res) => {
  let body = req.body;
  let arr = [
    body.title,
    body.description,
    body.state,
    body.posterID,
    body.projectID,
  ];
  db.createFeature(arr, (err, data) => {
    if (err) throw err;
    res.send(`created sucssefully`);
  });
});

app.post("/projectFeature", (req, res) => {
  db.getFeature(req.body.projectID, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/updateFeature", (req, res) => {
  let arr = [req.body.newState, req.body.projectID, req.body.title];
  db.updateFeature(arr, (err, data) => {
    if (err) throw err;
    res.send("feature is up to date");
  });
});

app.post("/deleteFeature", (req, res) => {
  console.log(req.body);
  db.deleteFeature(req.body.title, (err, data) => {
    if (err) throw err;
    res.send("Feature removed");
  });
});
//get All user name
app.get("/user", async (req, res) => {
  try {
    const userData = await db.getUserName(req.params.username, req.params.id);
    res.status(200).send(userData);
  } catch (err) {
    console.error(err);
  }
});

///Add new users to the organization
app.post("/userOrgId/", async (req, res) => {
  try {
    await db.AddNewUsersToOrg(req.body.userID, req.body.orgID);
  } catch (e) {
    console.log(e);
  }
});

//get organizations where other users add this user
app.get("/orgotherusers/:userid", async (req, res) => {
  try {
    const userData = await db.getOtherOrg(req.params.userid);
    res.status(200).send(userData);
  } catch (err) {
    console.error(err);
  }
});

app.post("/globalChat", async (req, res) => {
  try {
    await db.sendMsg(req.body.userID, req.body.messagetext, req.body.username);
  } catch (e) {
    console.log(e);
  }
});
//get all msg
app.get("/globalChat", async (req, res) => {
  try {
    const messages = await db.getAllMsg();
    res.status(200).send(messages);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
