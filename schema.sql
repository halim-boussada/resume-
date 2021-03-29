DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;
CREATE TABLE users(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(100),
  email varchar(100),
  password varchar(1000),
  Cohort varchar(100),
  Role varchar(50) , 
  firstTime boolean not null default true
);

CREATE TABLE Modules (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nameModule varchar(40),
  video varchar(5000),
  nameCours varchar(20)
);
CREATE TABLE Content (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(30),
  description varchar(10000),
  idModule INT(4)
);
CREATE TABLE Courses(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  content text(16383),
  nameCours varchar(30),
  Creator varchar(30),
  videoUrl text(10000),
  imageUrl text(10000),
  Cohort   varchar(100),
  visibility boolean not null default false
);
CREATE TABLE Cohort(
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nameCohort varchar(100),
  nameCours varchar(100)
);
CREATE TABLE Instructors(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nameInstructor varchar(100),
email varchar(400),
password varchar(100),
nameCohort varchar(100)
);
CREATE TABLE CoursCreator(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nameCoursCreator varchar(100),
    email varchar(400),
    password varchar(100)
);
CREATE TABLE Stud(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR (50),
    lastname VARCHAR (50) ,
    password VARCHAR (150) NOT NULL,
    email VARCHAR (50) NOT NULL ,
    token varchar (300) ,
    nameCohort VARCHAR(100)
);
CREATE TABLE progress(
  idStud INT(4),
  numberOfModulesCompleted INT(4)
);
CREATE TABLE points(
  idStud INT(4),
  points int(10)
);
INSERT INTO Modules (nameModule) values ("node js");
INSERT INTO Modules (nameModule) values ("node js");
INSERT INTO Modules (nameModule) values ("node js");
INSERT INTO Modules (nameModule) values ("node js");
INSERT INTO Modules (nameModule) values ("node js");
INSERT INTO Modules (nameModule) values ("node js");

