DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;
CREATE TABLE users (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fullname varchar (50) NOT NULL,
    username varchar (50) NOT NULL,
    secretinfo varchar (150) NOT NULL,
    password varchar (250) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE organizations (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (50) NOT NULL UNIQUE,
    description varchar (250) NOT NULL,
    userID int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (userID) REFERENCES users (id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE projects (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (50) NOT NULL,
    description varchar (250),
    organizationID int NOT NULL,
    userID int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (organizationID) REFERENCES organizations (id),
    FOREIGN KEY (userID) REFERENCES users (id)
);
CREATE TABLE feeds (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (50) NOT NULL UNIQUE,
    description varchar (250) NOT NULL,
    type varchar (50) NOT NULL,
    projectID int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (projectID) REFERENCES projects (id)
);
CREATE TABLE privileges (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE privll_user (
    id int NOT NULL AUTO_INCREMENT,
    userID int NOT NULL,
    privID int NOT NULL,
    FOREIGN KEY (userID) REFERENCES users (id),
    FOREIGN KEY (userID) REFERENCES privileges (id),
    PRIMARY KEY (ID)
);
CREATE TABLE issues (
    id int NOT NULL AUTO_INCREMENT,
    title varchar (50) NOT NULL,
    description varchar (250) NOT NULL,
    state varchar (50) NOT NULL,
    posterID int NOT NULL,
    projectID int NOT NULL,
    FOREIGN KEY (projectID) REFERENCES projects (id),
    FOREIGN KEY (posterID) REFERENCES users (id),
    PRIMARY KEY (ID)
);
/**********Change the posterID name to userID*********/
CREATE TABLE features (
    id int NOT NULL AUTO_INCREMENT,
    title varchar (50) NOT NULL UNIQUE,
    description varchar (250) NOT NULL,
    posterID int NOT NULL,
    projectID int NOT NULL,
    FOREIGN KEY (projectID) REFERENCES projects (id),
    FOREIGN KEY (posterID) REFERENCES users (id),
    state varchar (50) NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    text varchar (250) NOT NULL,
    userID int NOT NULL,
    issueID int NOT NULL,
    FOREIGN KEY (userID) REFERENCES users (id),
    FOREIGN KEY (issueID) REFERENCES issues (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);
CREATE TABLE messages (
    id int NOT NULL AUTO_INCREMENT,
    message_text text NOT NULL,
    subject varchar (250) NOT NULL,
    senderID int NOT NULL,
    receiverID int NOT NULL,
    FOREIGN KEY (senderID) REFERENCES users (id),
    FOREIGN KEY (receiverID) REFERENCES users (id),
    PRIMARY KEY (ID)
);
CREATE TABLE useOrg (
    id int NOT NULL AUTO_INCREMENT,
    userID int NOT NULL,
    orgID int NOT NULL,
    primary key (id)
);
CREATE TABLE globalChat (
     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
     userID int,
     username varchar (50) NOT NULL,
     messagetext TEXT,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,   
     FOREIGN KEY (userID) REFERENCES users(id)
);